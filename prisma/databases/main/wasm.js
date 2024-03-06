
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Pedidos_vendaScalarFieldEnum = {
  id: 'id',
  numero: 'numero',
  vendedor_id: 'vendedor_id',
  vendedor_nome: 'vendedor_nome',
  vendedor_id_sirius: 'vendedor_id_sirius',
  cliente_id: 'cliente_id',
  cliente_nome: 'cliente_nome',
  cliente_id_sirius: 'cliente_id_sirius',
  usuario_id: 'usuario_id',
  desconto: 'desconto',
  valor_bruto: 'valor_bruto',
  valor_liquido: 'valor_liquido',
  forma_pagamento: 'forma_pagamento',
  pagamento: 'pagamento',
  troco: 'troco',
  status: 'status',
  cpf_cnpj: 'cpf_cnpj',
  observacoes: 'observacoes',
  data_criacao: 'data_criacao',
  cliente_contato: 'cliente_contato',
  data_realizacao: 'data_realizacao',
  data_sincronizacao: 'data_sincronizacao',
  condicao_pagamento_id: 'condicao_pagamento_id',
  entrega_cep: 'entrega_cep',
  entrega_logradouro: 'entrega_logradouro',
  entrega_numero: 'entrega_numero',
  entrega_complemento: 'entrega_complemento',
  entrega_bairro: 'entrega_bairro',
  entrega_cidade: 'entrega_cidade',
  entrega_uf: 'entrega_uf'
};

exports.Prisma.Pedidos_venda_itensScalarFieldEnum = {
  id: 'id',
  pedido_id: 'pedido_id',
  produto_id: 'produto_id',
  produto_sirius_id: 'produto_sirius_id',
  descricao: 'descricao',
  unidade: 'unidade',
  quantidade: 'quantidade',
  valor_unitario: 'valor_unitario',
  valor_total: 'valor_total',
  ean: 'ean',
  codigo: 'codigo'
};

exports.Prisma.Produtos_movimentacoesScalarFieldEnum = {
  pm_id: 'pm_id',
  pm_pedido_venda_id: 'pm_pedido_venda_id',
  pm_produto_id: 'pm_produto_id',
  pm_usuario_id: 'pm_usuario_id',
  pm_saldo_anterior: 'pm_saldo_anterior',
  pm_saldo_atual: 'pm_saldo_atual',
  pm_quantidade: 'pm_quantidade',
  pm_tipo_movimentacao: 'pm_tipo_movimentacao',
  pm_data_hora: 'pm_data_hora',
  pm_numero_nota_fiscal: 'pm_numero_nota_fiscal',
  pm_observacao: 'pm_observacao',
  pedidos_vendaId: 'pedidos_vendaId',
  produtosId: 'produtosId'
};

exports.Prisma.CertificadoScalarFieldEnum = {
  id: 'id',
  senhaCert: 'senhaCert',
  serieCert: 'serieCert',
  nomeCert: 'nomeCert',
  pathCert: 'pathCert'
};

exports.Prisma.ClientesScalarFieldEnum = {
  id: 'id',
  id_sirius: 'id_sirius',
  status: 'status',
  dataFoiCadastrado: 'dataFoiCadastrado',
  dataUltimaAtualizacao: 'dataUltimaAtualizacao',
  razaoSocial: 'razaoSocial',
  fantasia: 'fantasia',
  cpf: 'cpf',
  cnpj: 'cnpj',
  idEstrangeiro: 'idEstrangeiro',
  indIE: 'indIE',
  inscEstadual: 'inscEstadual',
  inscMunicipal: 'inscMunicipal',
  tipoCliente: 'tipoCliente',
  exclusivo: 'exclusivo',
  vendedor_id: 'vendedor_id',
  vendedor_id_sirius: 'vendedor_id_sirius',
  vendedor_nome: 'vendedor_nome',
  lista_preco_id: 'lista_preco_id',
  lista_preco_nome: 'lista_preco_nome',
  condicao_pagamento_id: 'condicao_pagamento_id',
  contato: 'contato',
  contato_nome: 'contato_nome'
};

exports.Prisma.Clientes_x_produtosScalarFieldEnum = {
  id: 'id',
  valor: 'valor',
  cliente_id: 'cliente_id',
  cliente_id_sirius: 'cliente_id_sirius',
  produto_id: 'produto_id',
  produto_id_sirius: 'produto_id_sirius',
  produto_cod: 'produto_cod'
};

exports.Prisma.Condicoes_pagamentoScalarFieldEnum = {
  id: 'id',
  id_sirius: 'id_sirius',
  descricao: 'descricao'
};

exports.Prisma.ContatosScalarFieldEnum = {
  id: 'id',
  contato: 'contato',
  tipoContato: 'tipoContato',
  cliente_id: 'cliente_id'
};

exports.Prisma.DocreferenciadoScalarFieldEnum = {
  idDocReferenciado: 'idDocReferenciado',
  notaFiscal_id: 'notaFiscal_id',
  tipoDoc: 'tipoDoc',
  chave: 'chave'
};

exports.Prisma.EnderecosScalarFieldEnum = {
  id: 'id',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  complemento: 'complemento',
  bairro: 'bairro',
  cidade: 'cidade',
  codMun: 'codMun',
  codUF: 'codUF',
  uf: 'uf',
  cliente_id: 'cliente_id',
  tipoEndereco: 'tipoEndereco',
  status: 'status'
};

exports.Prisma.FornecedoresScalarFieldEnum = {
  id: 'id',
  fantasia: 'fantasia',
  razaoSocial: 'razaoSocial',
  status: 'status',
  cpfCnpj: 'cpfCnpj',
  tipo: 'tipo',
  inscEstadual: 'inscEstadual',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  complemento: 'complemento',
  bairro: 'bairro',
  cidade: 'cidade',
  uf: 'uf',
  email: 'email',
  celular: 'celular',
  telefone: 'telefone',
  fax: 'fax',
  pessoaContato: 'pessoaContato',
  observacoes: 'observacoes'
};

exports.Prisma.Listas_precosScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  id_sirius: 'id_sirius'
};

exports.Prisma.Listas_precos_x_produtosScalarFieldEnum = {
  id: 'id',
  lista_id: 'lista_id',
  produto_id: 'produto_id',
  produto_desc: 'produto_desc',
  valor: 'valor',
  id_sirius: 'id_sirius'
};

exports.Prisma.NfeconfigScalarFieldEnum = {
  idnfeconfig: 'idnfeconfig',
  tpAmb: 'tpAmb',
  tpImp: 'tpImp'
};

exports.Prisma.NotafiscalScalarFieldEnum = {
  id: 'id',
  versao: 'versao',
  chave: 'chave',
  status: 'status',
  cUf: 'cUf',
  cNf: 'cNf',
  natOp: 'natOp',
  modelo: 'modelo',
  serie: 'serie',
  nNf: 'nNf',
  dhEmi: 'dhEmi',
  tpNf: 'tpNf',
  idDest: 'idDest',
  cMunFG: 'cMunFG',
  tpImp: 'tpImp',
  tpEmis: 'tpEmis',
  cDV: 'cDV',
  tpAmb: 'tpAmb',
  finNfe: 'finNfe',
  indFinal: 'indFinal',
  indPres: 'indPres',
  procEmi: 'procEmi',
  verProc: 'verProc',
  vBC: 'vBC',
  vICMS: 'vICMS',
  vICMSDeson: 'vICMSDeson',
  vFCP: 'vFCP',
  vBCST: 'vBCST',
  vST: 'vST',
  vFCPST: 'vFCPST',
  vFCPSTRet: 'vFCPSTRet',
  vProd: 'vProd',
  vFrete: 'vFrete',
  vDesc: 'vDesc',
  vII: 'vII',
  vIPI: 'vIPI',
  vIPIDevol: 'vIPIDevol',
  vPIS: 'vPIS',
  vCOFINS: 'vCOFINS',
  vOutro: 'vOutro',
  vNF: 'vNF',
  vTotTrib: 'vTotTrib',
  modFrete: 'modFrete',
  emitCnpjcpf: 'emitCnpjcpf',
  emitxNome: 'emitxNome',
  enderEmitxLgr: 'enderEmitxLgr',
  enderEmitNro: 'enderEmitNro',
  enderEmitxCpl: 'enderEmitxCpl',
  enderEmitxBairro: 'enderEmitxBairro',
  enderEmitcMun: 'enderEmitcMun',
  enderEmitxMun: 'enderEmitxMun',
  enderEmitUF: 'enderEmitUF',
  enderEmitCEP: 'enderEmitCEP',
  enderEmitFone: 'enderEmitFone',
  enderEmitIE: 'enderEmitIE',
  emitCrt: 'emitCrt',
  destCNPJCPF: 'destCNPJCPF',
  destIdEstrangeiro: 'destIdEstrangeiro',
  destxNome: 'destxNome',
  destIE: 'destIE',
  destEmail: 'destEmail',
  destFone: 'destFone',
  cliente_id: 'cliente_id',
  enderDestxLgr: 'enderDestxLgr',
  enderDestnro: 'enderDestnro',
  enderDestxCpl: 'enderDestxCpl',
  enderDestxBairro: 'enderDestxBairro',
  enderDestcMun: 'enderDestcMun',
  enderDestxMun: 'enderDestxMun',
  enderDestUF: 'enderDestUF',
  enderDestCep: 'enderDestCep',
  enderDestFone: 'enderDestFone',
  endereco_id: 'endereco_id',
  indIEDest: 'indIEDest',
  emitInscEstadual: 'emitInscEstadual',
  xml: 'xml',
  protocolo: 'protocolo',
  dhRecbto: 'dhRecbto',
  infCpl: 'infCpl',
  infAdFisco: 'infAdFisco',
  statusCode: 'statusCode',
  xMotivo: 'xMotivo',
  retWS: 'retWS'
};

exports.Prisma.NotafiscalitemScalarFieldEnum = {
  id: 'id',
  cProd: 'cProd',
  cEAN: 'cEAN',
  xProd: 'xProd',
  ncm: 'ncm',
  cest: 'cest',
  cfop: 'cfop',
  uCom: 'uCom',
  qCom: 'qCom',
  vUnCom: 'vUnCom',
  vProd: 'vProd',
  cEANTrib: 'cEANTrib',
  uTrib: 'uTrib',
  qTrib: 'qTrib',
  indTotal: 'indTotal',
  cst: 'cst',
  modBc: 'modBc',
  vBc: 'vBc',
  pIcms: 'pIcms',
  vIcms: 'vIcms',
  pFcp: 'pFcp',
  vFcp: 'vFcp',
  vBCFCP: 'vBCFCP',
  modBCST: 'modBCST',
  vBCST: 'vBCST',
  pICMSST: 'pICMSST',
  vICMSST: 'vICMSST',
  vBCFCPST: 'vBCFCPST',
  pFCPST: 'pFCPST',
  vFCPST: 'vFCPST',
  pRedBC: 'pRedBC',
  vICMSDeson: 'vICMSDeson',
  motDesICMS: 'motDesICMS',
  vBCSTRet: 'vBCSTRet',
  orig: 'orig',
  pST: 'pST',
  vICMSSTRet: 'vICMSSTRet',
  vBCFCPSTRet: 'vBCFCPSTRet',
  pFCPSTRet: 'pFCPSTRet',
  vFCPSTRet: 'vFCPSTRet',
  pRedBCEfet: 'pRedBCEfet',
  vBCEfet: 'vBCEfet',
  pICMSEfet: 'pICMSEfet',
  vICMSEfet: 'vICMSEfet',
  pBCOp: 'pBCOp',
  UFST: 'UFST',
  CSOSN: 'CSOSN',
  pCredSN: 'pCredSN',
  vCredICMSSN: 'vCredICMSSN',
  notafiscal_id: 'notafiscal_id',
  vUnTrib: 'vUnTrib',
  produto_id: 'produto_id',
  vFrete: 'vFrete',
  vOutro: 'vOutro',
  vDesc: 'vDesc',
  cstPIS: 'cstPIS',
  vBCPIS: 'vBCPIS',
  pPIS: 'pPIS',
  vPIS: 'vPIS',
  qBCPISProd: 'qBCPISProd',
  vAliqPISProd: 'vAliqPISProd',
  cstCOFINS: 'cstCOFINS',
  vBCCOFINS: 'vBCCOFINS',
  pCOFINS: 'pCOFINS',
  vCOFINS: 'vCOFINS',
  qBCCOFINSProd: 'qBCCOFINSProd',
  vAliqCOFINSProd: 'vAliqCOFINSProd',
  pDevol: 'pDevol',
  vIPIDevol: 'vIPIDevol',
  pRedBCST: 'pRedBCST',
  pMVAST: 'pMVAST'
};

exports.Prisma.NotafiscalpagamentosScalarFieldEnum = {
  id: 'id',
  indicacao: 'indicacao',
  tipo: 'tipo',
  valor: 'valor',
  data_criacao: 'data_criacao',
  data_vencimento: 'data_vencimento',
  notaFiscal_id: 'notaFiscal_id'
};

exports.Prisma.Pedido_compra_itensScalarFieldEnum = {
  id: 'id',
  produto_id: 'produto_id',
  pedido_id: 'pedido_id',
  unidade: 'unidade',
  complemento_descricao: 'complemento_descricao',
  observacoes: 'observacoes',
  quantidade: 'quantidade',
  valor_unitario: 'valor_unitario',
  valor_total: 'valor_total',
  produto_descricao: 'produto_descricao'
};

exports.Prisma.Pedido_compra_pagamentosScalarFieldEnum = {
  id: 'id',
  pedido_id: 'pedido_id',
  data_criacao: 'data_criacao',
  data_vencimento: 'data_vencimento',
  forma_pagamento: 'forma_pagamento',
  valor: 'valor'
};

exports.Prisma.Pedidos_compraScalarFieldEnum = {
  id: 'id',
  fornecedor_id: 'fornecedor_id',
  status: 'status',
  data_criacao: 'data_criacao',
  data_emissao: 'data_emissao',
  data_realizado: 'data_realizado',
  forma_pagamento: 'forma_pagamento',
  valor_total: 'valor_total',
  num_pedido_venda: 'num_pedido_venda',
  num_nf: 'num_nf',
  descricao: 'descricao',
  observacoes: 'observacoes'
};

exports.Prisma.Pedidos_venda_pagamentosScalarFieldEnum = {
  id: 'id',
  pedido_id: 'pedido_id',
  forma_pagamento: 'forma_pagamento',
  valor: 'valor',
  data_criacao: 'data_criacao',
  data_vencimento: 'data_vencimento'
};

exports.Prisma.ProdutosScalarFieldEnum = {
  id: 'id',
  id_sirius: 'id_sirius',
  codProduto: 'codProduto',
  descricao: 'descricao',
  codEAN: 'codEAN',
  ncm: 'ncm',
  cfop: 'cfop',
  unCom: 'unCom',
  qtdCom: 'qtdCom',
  vlrUnCom: 'vlrUnCom',
  vlrProd: 'vlrProd',
  codEANTrib: 'codEANTrib',
  unTrib: 'unTrib',
  qtdTrib: 'qtdTrib',
  vlrUnTrib: 'vlrUnTrib',
  saldo: 'saldo',
  status: 'status'
};

exports.Prisma.VendedoresScalarFieldEnum = {
  id: 'id',
  id_sirius: 'id_sirius',
  nome: 'nome',
  apelido: 'apelido',
  status: 'status',
  cpf: 'cpf',
  cnpj: 'cnpj',
  inscEstadual: 'inscEstadual',
  rg: 'rg',
  telefone: 'telefone',
  celular: 'celular',
  email: 'email',
  fax: 'fax',
  pessoaContato: 'pessoaContato',
  cep: 'cep',
  logradouro: 'logradouro',
  numero: 'numero',
  complemento: 'complemento',
  bairro: 'bairro',
  regiao: 'regiao',
  cidade: 'cidade',
  uf: 'uf',
  departamento: 'departamento',
  porcComissao: 'porcComissao',
  porcDescMax: 'porcDescMax',
  nomeBanco: 'nomeBanco',
  numeroBanco: 'numeroBanco',
  agencia: 'agencia',
  digitoAgencia: 'digitoAgencia',
  conta: 'conta',
  digitoConta: 'digitoConta',
  observacoes: 'observacoes',
  idUser: 'idUser'
};

exports.Prisma.Vendedores_x_usuariosScalarFieldEnum = {
  id: 'id',
  id_usuario: 'id_usuario',
  id_vendedor: 'id_vendedor',
  id_vendedor_sirius: 'id_vendedor_sirius'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  pedidos_venda: 'pedidos_venda',
  pedidos_venda_itens: 'pedidos_venda_itens',
  produtos_movimentacoes: 'produtos_movimentacoes',
  certificado: 'certificado',
  clientes: 'clientes',
  clientes_x_produtos: 'clientes_x_produtos',
  condicoes_pagamento: 'condicoes_pagamento',
  contatos: 'contatos',
  docreferenciado: 'docreferenciado',
  enderecos: 'enderecos',
  fornecedores: 'fornecedores',
  listas_precos: 'listas_precos',
  listas_precos_x_produtos: 'listas_precos_x_produtos',
  nfeconfig: 'nfeconfig',
  notafiscal: 'notafiscal',
  notafiscalitem: 'notafiscalitem',
  notafiscalpagamentos: 'notafiscalpagamentos',
  pedido_compra_itens: 'pedido_compra_itens',
  pedido_compra_pagamentos: 'pedido_compra_pagamentos',
  pedidos_compra: 'pedidos_compra',
  pedidos_venda_pagamentos: 'pedidos_venda_pagamentos',
  produtos: 'produtos',
  vendedores: 'vendedores',
  vendedores_x_usuarios: 'vendedores_x_usuarios'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
