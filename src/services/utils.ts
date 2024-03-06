/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import { ParamFilter, ParamProps } from '../models/utils.model';
import { IncomingHttpHeaders } from 'http';
import { Request } from 'express';
import { error_response } from './error_service';

export function  ParamFilterFormater(Params: ParamFilter[]) {
	for (const param of Params) {
		if (param.value === '' || param.value === undefined || param.value === null) {
			continue;
		}

		switch (param.field) {
		case 'saldo':
			if (param.value === 0 || param.value === '0') {
				param.value = { lte: param.value };
				break;
			}
			param.value = { gte: param.value };
			break;
		case 'descricao':
			param.value = { contains: param.value };
			break;
		case (param.field.indexOf('id_') != -1 ? param.field:''):
			if(param.value.includes('[')){
				param.value = param.value.replace('[','');
				param.value = param.value.replace(']','');
				param.value = param.value.split(',');
				param.value = param.value.map((numero:string)=>{return parseInt(numero);}); 
			}else{
				param.value = [parseInt(param.value)];
			}
			param.value = {in: param.value};
			break;
		}
	}
	return Params;
}
//transforma o Req.query nos filtros e configurações do get
export function GetPropsAndFilters(Req:Request){
	let ParamConfig: ParamProps[] = [];
	const ParamFilter: ParamFilter[] = [];

	Object.entries(Req.query).map(([field, value]) => (
		ParamConfig.push({ field: field, value: value })
	));

	const filters = ParamConfig.filter(element => element.field == 'filter');

	ParamConfig = ParamConfig.filter(element => element.field !== 'filter');
	if (filters != undefined && filters != null) {
		for (const filter of filters) {
			const json = JSON.parse(filter.value);
			json.forEach((element: { field: any; value: any; }) => {
				ParamFilter.push({ field: element.field, value: element.value });
			});
		}
	}
	return {ParamConfig,ParamFilter};
}
export function getAuthorization(ReqHeader: IncomingHttpHeaders):string{
	let authorization  = ReqHeader.authorization ?? '';
	if(authorization != ''){
		authorization = authorization.split(' ')[1];
		return authorization;
	}else{
		throw new error_response(400,'Token Invalido');
	}
}
export function decodeToken(token:string){
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
	if (!decoded || !decoded.id_company) {
		throw new Error('Invalid JWT');
	}
	return decoded;
}
//Monta o Query para fazer o Get no Prisma
// export function buildQuery(selectors?: ParamFilter[], params?: ParamProps[]): IQuery {
// 	const query: IQuery = { orderBy: { id: 'asc' }, skip: 0, take: 20, where: {}} ;
// 	//Criando o Where
// 	if (selectors && selectors.length > 0) {
// 		query.where = {};
// 		for (const filter of selectors) {
// 			if (filter.value === '' || filter.value === undefined || filter.value === null) continue;
  
// 			if (filter.field === 'dateInitial') {
// 				const dateCondition = query.where['data_realizacao'] || {};

// 				query.where['data_realizacao'] = { ...dateCondition, gte: new Date(filter.value) };
// 				continue;
// 			}
// 			if (filter.field === 'dateFinal') {
// 				const dateCondition = query.where['data_realizacao'] || {};
// 				query.where['data_realizacao'] = { ...dateCondition, lt: new Date(filter.value) };
// 				query.where['data_realizacao'].lt.setDate((query.where['data_realizacao'].lt as Date).getDate() + 1);
// 				continue;
// 			}
// 			if (filter.field === 'id'){
// 				if(typeof filter.value === 'string'){
// 					filter.value = parseInt(filter.value);
// 				}
// 				query.where[filter.field] = filter.value;
// 				continue;
// 			}
// 			else {
// 				query.where[filter.field] = filter.value;
// 			}
// 		}
// 	}

// 	//Criando os Filtros
// 	if (params && params.length > 0) {
// 		for (const param of params) {
// 			switch (param.field) {
// 			case 'take':
// 				query.take = parseInt(param.value);
// 				break;
// 			case 'page':
// 				query.skip = param.value;
// 				break;
// 			case 'orderBy':
// 				query.orderBy = { [param.value]: 'asc' };
// 				break;
// 			case 'order':
// 				query.orderBy = { [Object.getOwnPropertyNames(query.orderBy)[0]]: param.value };
// 				break;
// 			}
// 		}
// 		//Calculando o Skip
// 		query.skip = (query.skip ?? 0) * (query.take ?? 0);
// 	}
// 	return query;
// }
//Pega o Token do Header


// Função para converter campos BigInt em strings
export function convertBigIntToString(obj: any){
	///||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||Z
	///VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
	///FUNÇÃO DESNECESSARIA, O PRISMA CONVERTE COM PROPRIEDADES PROPRIAS DE FORMA MAIS EFICIENTE
	///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	///||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			if (typeof obj[key] === 'bigint') {
				obj[key] = obj[key].toString();
			}
		}
	}
	return obj;
}

export function decimalToNumber(decimal:any):number{
	const number = parseFloat(decimal ?? '0');
	return number;
}