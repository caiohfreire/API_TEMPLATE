
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AcoesScalarFieldEnum = {
  id: 'id',
  descricao: 'descricao',
  descricao_titulo: 'descricao_titulo',
  tabela: 'tabela',
  tabela_titulo: 'tabela_titulo',
  valor_padrao: 'valor_padrao'
};

exports.Prisma.Acoes_x_gruposScalarFieldEnum = {
  id: 'id',
  id_acao: 'id_acao',
  id_grupo_usuario: 'id_grupo_usuario',
  permite: 'permite'
};

exports.Prisma.EmpresasScalarFieldEnum = {
  id: 'id',
  cnpj: 'cnpj',
  xRazaoSocial: 'xRazaoSocial',
  xFant: 'xFant',
  xLgr: 'xLgr',
  nro: 'nro',
  xCpl: 'xCpl',
  xBairro: 'xBairro',
  cMun: 'cMun',
  xMun: 'xMun',
  uf: 'uf',
  cep: 'cep',
  fone: 'fone',
  ie: 'ie',
  crt: 'crt',
  token: 'token',
  banco: 'banco',
  status: 'status',
  email: 'email'
};

exports.Prisma.Grupos_usuariosScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  id_empresa: 'id_empresa',
  pagina_inicial: 'pagina_inicial'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  ultimo_nome: 'ultimo_nome',
  email: 'email',
  senha: 'senha',
  celular: 'celular',
  status: 'status',
  user_token: 'user_token',
  exclusivo: 'exclusivo'
};

exports.Prisma.Usuarios_x_empresasScalarFieldEnum = {
  id: 'id',
  id_empresa: 'id_empresa',
  id_usuario: 'id_usuario',
  id_grupo_usuario: 'id_grupo_usuario'
};

exports.Prisma.ParametrosScalarFieldEnum = {
  id: 'id',
  parametro: 'parametro',
  valorParametro: 'valorParametro',
  descricao: 'descricao'
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
  acoes: 'acoes',
  acoes_x_grupos: 'acoes_x_grupos',
  empresas: 'empresas',
  grupos_usuarios: 'grupos_usuarios',
  usuarios: 'usuarios',
  usuarios_x_empresas: 'usuarios_x_empresas',
  parametros: 'parametros'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\usuario022\\Desktop\\GitHub\\Sat-Web-API\\prisma\\databases\\auth",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [
      "views"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "AUTH_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCAgICAgICAgPSAiLi9kYXRhYmFzZXMvYXV0aCIKICBwcmV2aWV3RmVhdHVyZXMgPSBbInZpZXdzIl0KICBiaW5hcnlUYXJnZXRzID0gWyJuYXRpdmUiLCAiZGViaWFuLW9wZW5zc2wtMS4xLngiXQp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiQVVUSF9EQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBhY29lcyB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAdW5pcXVlKG1hcDogImlkIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRlc2NyaWNhbyAgICAgICAgU3RyaW5nICAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgZGVzY3JpY2FvX3RpdHVsbyBTdHJpbmcgICAgICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICB0YWJlbGEgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGRiLlZhckNoYXIoNDApCiAgdGFiZWxhX3RpdHVsbyAgICBTdHJpbmcgICAgICAgICAgIEBkYi5WYXJDaGFyKDQwKQogIHZhbG9yX3BhZHJhbyAgICAgSW50PyAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGFjb2VzX3hfZ3J1cG9zICAgYWNvZXNfeF9ncnVwb3NbXQp9Cgptb2RlbCBhY29lc194X2dydXBvcyB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgQGlkIEB1bmlxdWUobWFwOiAiaWQiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgaWRfYWNhbyAgICAgICAgICBJbnQKICBpZF9ncnVwb191c3VhcmlvIEludAogIHBlcm1pdGUgICAgICAgICAgSW50CiAgYWNvZXMgICAgICAgICAgICBhY29lcyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX2FjYW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImFjb2VzX3hfZ3J1cG9zX2liZmtfMSIpCiAgZ3J1cG9zX3VzdWFyaW9zICBncnVwb3NfdXN1YXJpb3MgQHJlbGF0aW9uKGZpZWxkczogW2lkX2dydXBvX3VzdWFyaW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogImFjb2VzX3hfZ3J1cG9zX2liZmtfMiIpCgogIEBAaW5kZXgoW2lkX2FjYW9dLCBtYXA6ICJpZF9hY2FvIikKICBAQGluZGV4KFtpZF9ncnVwb191c3VhcmlvXSwgbWFwOiAiaWRfZ3J1cG9fdXN1YXJpbyIpCn0KCm1vZGVsIGVtcHJlc2FzIHsKICBpZCAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgICBAaWQgQHVuaXF1ZShtYXA6ICJpZCIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjbnBqICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxOCkKICB4UmF6YW9Tb2NpYWwgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig2MCkKICB4RmFudCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig2MCkKICB4TGdyICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig2MCkKICBucm8gICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig2MCkKICB4Q3BsICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig2MCkKICB4QmFpcnJvICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig2MCkKICBjTXVuICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcig3KQogIHhNdW4gICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDYwKQogIHVmICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYi5DaGFyKDIpCiAgY2VwICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoOCkKICBmb25lICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxNCkKICBpZSAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxNCkKICBjcnQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigxKQogIHRva2VuICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEB1bmlxdWUobWFwOiAidG9rZW4iKSBAZGIuVmFyQ2hhcigxMjgpCiAgYmFuY28gICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIHN0YXR1cyAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDEpCiAgZW1haWwgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTI5KQogIGdydXBvc191c3VhcmlvcyAgICAgZ3J1cG9zX3VzdWFyaW9zW10KICB1c3Vhcmlvc194X2VtcHJlc2FzIHVzdWFyaW9zX3hfZW1wcmVzYXNbXQp9Cgptb2RlbCBncnVwb3NfdXN1YXJpb3MgewogIGlkICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgIEBpZCBAdW5pcXVlKG1hcDogImlkIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5vbWUgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDUwKQogIGlkX2VtcHJlc2EgICAgICAgICAgSW50CiAgcGFnaW5hX2luaWNpYWwgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRlZmF1bHQoIm5vdGFzLWZpc2NhaXMiKSBAZGIuVmFyQ2hhcigyMCkKICBhY29lc194X2dydXBvcyAgICAgIGFjb2VzX3hfZ3J1cG9zW10KICBlbXByZXNhcyAgICAgICAgICAgIGVtcHJlc2FzICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaWRfZW1wcmVzYV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAiZ3J1cG9zX3VzdWFyaW9zX2liZmtfMSIpCiAgdXN1YXJpb3NfeF9lbXByZXNhcyB1c3Vhcmlvc194X2VtcHJlc2FzW10KCiAgQEBpbmRleChbaWRfZW1wcmVzYV0sIG1hcDogImlkX2VtcHJlc2EiKQp9Cgptb2RlbCB1c3VhcmlvcyB7CiAgaWQgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUobWFwOiAiaWQiKSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm9tZSAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNjApCiAgdWx0aW1vX25vbWUgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoNjApCiAgZW1haWwgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRiLlZhckNoYXIoMTUwKQogIHNlbmhhICAgICAgICAgICAgICAgU3RyaW5nPwogIGNlbHVsYXIgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkYi5WYXJDaGFyKDE0KQogIHN0YXR1cyAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgIEBkZWZhdWx0KCJBIikgQGRiLkNoYXIoMSkKICB1c2VyX3Rva2VuICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAdW5pcXVlKG1hcDogInVzZXJfdG9rZW4iKSBAZGIuVmFyQ2hhcigxMjgpCiAgZXhjbHVzaXZvICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgQGRlZmF1bHQoIk4iKSBAZGIuQ2hhcigxKQogIHVzdWFyaW9zX3hfZW1wcmVzYXMgdXN1YXJpb3NfeF9lbXByZXNhc1tdCn0KCm1vZGVsIHVzdWFyaW9zX3hfZW1wcmVzYXMgewogIGlkICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAdW5pcXVlKG1hcDogImlkIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGlkX2VtcHJlc2EgICAgICAgSW50CiAgaWRfdXN1YXJpbyAgICAgICBJbnQKICBpZF9ncnVwb191c3VhcmlvIEludAogIGVtcHJlc2FzICAgICAgICAgZW1wcmVzYXMgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtpZF9lbXByZXNhXSwgcmVmZXJlbmNlczogW2lkXSwgb25VcGRhdGU6IFJlc3RyaWN0LCBtYXA6ICJ1c3Vhcmlvc194X2VtcHJlc2FzX2liZmtfMSIpCiAgdXN1YXJpb3MgICAgICAgICB1c3VhcmlvcyAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2lkX3VzdWFyaW9dLCByZWZlcmVuY2VzOiBbaWRdLCBvblVwZGF0ZTogUmVzdHJpY3QsIG1hcDogInVzdWFyaW9zX3hfZW1wcmVzYXNfaWJma18yIikKICBncnVwb3NfdXN1YXJpb3MgIGdydXBvc191c3VhcmlvcyBAcmVsYXRpb24oZmllbGRzOiBbaWRfZ3J1cG9fdXN1YXJpb10sIHJlZmVyZW5jZXM6IFtpZF0sIG9uVXBkYXRlOiBSZXN0cmljdCwgbWFwOiAidXN1YXJpb3NfeF9lbXByZXNhc19pYmZrXzMiKQoKICBAQGluZGV4KFtpZF9lbXByZXNhXSwgbWFwOiAiaWRfZW1wcmVzYSIpCiAgQEBpbmRleChbaWRfZ3J1cG9fdXN1YXJpb10sIG1hcDogImlkX2dydXBvX3VzdWFyaW8iKQogIEBAaW5kZXgoW2lkX3VzdWFyaW9dLCBtYXA6ICJpZF91c3VhcmlvIikKfQoKbW9kZWwgcGFyYW1ldHJvcyB7CiAgaWQgICAgICAgICAgICAgSW50ICAgIEBpZCBAdW5pcXVlKG1hcDogImlkX1VOSVFVRSIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwYXJhbWV0cm8gICAgICBTdHJpbmcgQHVuaXF1ZShtYXA6ICJwYXJhbWV0cm9fVU5JUVVFIikgQGRiLlZhckNoYXIoODApCiAgdmFsb3JQYXJhbWV0cm8gSW50CiAgZGVzY3JpY2FvICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NikKfQo=",
  "inlineSchemaHash": "62313d9104d4c40ce9b26ec45787cabbcba946c10bb0a019912517b2fdc71dde",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/databases/auth",
    "databases/auth",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"acoes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao_titulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tabela\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tabela_titulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor_padrao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes_x_grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes_x_grupos\",\"relationName\":\"acoesToacoes_x_grupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"acoes_x_grupos\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_acao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_grupo_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes\",\"relationName\":\"acoesToacoes_x_grupos\",\"relationFromFields\":[\"id_acao\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"acoes_x_gruposTogrupos_usuarios\",\"relationFromFields\":[\"id_grupo_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xRazaoSocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xFant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xLgr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xCpl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xBairro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cMun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xMun\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"empresasTogrupos_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"empresasTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"grupos_usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pagina_inicial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"notas-fiscais\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acoes_x_grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"acoes_x_grupos\",\"relationName\":\"acoes_x_gruposTogrupos_usuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTogrupos_usuarios\",\"relationFromFields\":[\"id_empresa\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"grupos_usuariosTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimo_nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"celular\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"A\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exclusivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios_x_empresas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios_x_empresas\",\"relationName\":\"usuariosTousuarios_x_empresas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuarios_x_empresas\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_empresa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_grupo_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empresas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"empresas\",\"relationName\":\"empresasTousuarios_x_empresas\",\"relationFromFields\":[\"id_empresa\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuarios\",\"relationName\":\"usuariosTousuarios_x_empresas\",\"relationFromFields\":[\"id_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupos_usuarios\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupos_usuarios\",\"relationName\":\"grupos_usuariosTousuarios_x_empresas\",\"relationFromFields\":[\"id_grupo_usuario\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"parametros\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parametro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valorParametro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/databases/auth/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/databases/auth/libquery_engine-debian-openssl-1.1.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/databases/auth/schema.prisma")
