/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes';
import cluster from 'cluster';
import os from 'os';
import { error_response } from './services/error_service';

//Verifica no Computador Quantos Nucleos o Processador tem
const numCPUs = os.cpus().length;

//Valida se o executavel é o "Pai" e se for ele vai criar os Forks, que são novas instancias da mesma API mas ligadas a mesma porta
if (cluster.isPrimary) {
	console.log(`Master ${process.pid} is running`);
	//Criação do fork
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	//Função de desligamento da API
	cluster.on('exit', (worker: { process: { pid: any; }; }, code: any, signal: any) => {
		console.log(`Worker ${worker.process.pid} died`);
	});
} else {

	//instancia do Express
	const app = express();

	//Configuração CORS
	app.use(cors({
		origin: ['localhost', '192.168.0.183']
	}));

	//Configura o express para estar recebendo JSON como formato de Requisição. OBS: acredito dar pra colocar XML
	app.use(express.json());

	// faz a referencia para as rotas podendo 
	app.use(router);

	//Extenção final do Error middleware, é esse cara que pega e configura as respostas de erro criadas pelo erro middleware
	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		if (err instanceof error_response) {
			return res.status(err.code).json({
				error: err.message,
			});
		}
		return res.status(500).json({
			status: 'error',
			message: 'Internal Server Error',
		});
	});

	//Iniciação da API
	const server = app.listen(8099, () => {
		console.log('Server is running on port 8099');
	});

	// função Desliga os forks
	process.on('message', (message: string) => {
		if (message === 'shutdown') {
			console.log(`Worker ${process.pid} is shutting down...`);
			server.close(() => {
				console.log(`Worker ${process.pid} has shut down.`);
				process.exit(0);
			});
		}
	});
}

// Desliga Tudo
process.on('SIGINT', () => {
	console.log('Master received SIGINT signal.');

	// Send shutdown message to all workers
	for (const id in cluster.workers) {
		cluster.workers[id]?.send('shutdown');
	}

	// Disconnect the master
	cluster.disconnect(() => {
		console.log('Master has disconnected.');
		process.exit(0);
	});
});
