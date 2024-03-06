/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultArgs } from '@prisma/client/runtime/library';
import { Prisma, PrismaClient } from '../../prisma/databases/main';
import { error_response } from './error_service';
export class example_service {
	async get(prisma:PrismaClient) {
		try {
			//aqui é onde fica o service
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			
			const data = prisma.clientes.findMany({});
			return data;
			
		} catch (error) {
			throw new error_response(500, 'Erro ao Procurar Produtos');
		}
	}
	async create(data_example:any ,prisma:Omit<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>){
		try {
			//aqui é onde fica o service
			// eslint-disable-next-line @typescript-eslint/no-unused-vars

			const data = await prisma.clientes.create({data:data_example});
			return data;

		} catch (error) {
			throw new error_response(500, 'Erro ao Procurar Produtos');
		}
	}
}