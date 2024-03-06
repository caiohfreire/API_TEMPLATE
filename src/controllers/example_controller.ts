/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response } from 'express';
import { error_response } from '../services/error_service';
import { custom_request } from '../models/utils.model';
import { example_service } from '../services/exemple_service';
export class exemple_controller {

	async add_exemple(req: custom_request, res: Response) {
		//o prisma é criado pelo multitenant ao ser feita a requisição
		const prisma = req.prisma;
		try {
			//Exemplo de criação do service
			const service = new example_service();

			//consumo do Service
			const response_service = await service.get(prisma);

			//returno da função
			return res.status(200).json(response_service);

		} catch (error: any) {

			throw new error_response(error.code ?? 500, error.message ?? 'Internal Server Error');
		}
	}
	//EXEMPLO DE TRANSACTION
	async add_many_exemple(req: custom_request, res: Response) {
		const prisma = req.prisma;
		try {
			const { body_data_array }: { body_data_array: any[] } = req.body;

			const service = new example_service();

			const response_service = await prisma.$transaction(async (prisma_transaction_instance) => {

				//TRANSACTION SERVE PARA QUANDO FOR UTILIZAR MAIS DE UMA VEZ O PRISMA, E OS DADOS SÃO INTERLIGADOS, ONDE NO CASO DE ERRO,
				//TUDO DEVE SER DESFEITO ANTES DE RETORNAR O ERRO, O TRANSACTION FAZ ISSO DE FORMA AUTONÔMA;
				Promise.all(
					body_data_array.map((body_data) => {
						return service.create(
							body_data,
							prisma_transaction_instance
						);
					})
				);
			});
			return res.status(201).json(response_service);

		} catch (error: any) {
			throw new error_response(error.code ?? 500, error.message ?? 'Internal Server Error');
		}
	}
}