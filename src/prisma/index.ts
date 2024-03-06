/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient as PrismaClientAuth } from '../../prisma/databases/auth';
import { PrismaClient } from '../../prisma/databases/main';
import { decodeToken } from '../services/utils';

export const prismaAuth = new PrismaClientAuth();



export async function createPrismaClientFromJWT(token: string): Promise<PrismaClient> {
	try {

		// Recebe o JWT e deocdifica-o
		const decoded: any = decodeToken(token);
		// Pega o id da empresa do JWT e solicita a URL do banco
		const companyId = decoded.id_company;
		const connectionString = await getDatabaseConnectionStringForCompany(companyId);
		// gera a conexão do prisma
		const prisma = new PrismaClient({
			datasources: {
				db: {
					url: connectionString
				}
			}
		});
		//retorna o prisma
		return prisma;
	} catch (error) {
		throw error;
	}

	// Função para obter a string de conexão do banco de dados com base na empresa
	async function getDatabaseConnectionStringForCompany(companyId: number): Promise<string> {
		//Faz um get do nome do banco por meio do id da empresa

		const company = await prismaAuth.empresas.findUnique({ where: { id: companyId } });

		// gera a url de conexão do prisma mediante o nome do banco

		const databaseConfig = `mysql://softclever:soft@1973@localhost:3306/${company?.banco}?schema=public`;

		// returna a URL
		return databaseConfig;
	}

}
