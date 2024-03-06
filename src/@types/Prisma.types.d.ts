/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Express {
  export interface Request {
      prisma: any; // ou PrismaClient, dependendo de suas importações
  }
}

