import { Router } from 'express';
// import { error_middleware } from './middlewares/error_middleware/error_middleware';
// import { prisma_middleware } from './middlewares/MultiTenant/MultiTenant';

const router = Router();
// const error_middleware = new error_middleware();
// const prisma_middleware = new prisma_middleware();

//ORDER CONTROLLER

//ROTA DE EXXEMPLO, nem todo middleware recebe a requisição, ele pode ser antes ou até mesmo depois, isso vai de cada caso de uso

// router.get('/ExemploRota', prisma_middleware.handleAsync(error_middleware.handleAsync(new ControllerExemplo().FuncaoExemplo)));

export { router };

