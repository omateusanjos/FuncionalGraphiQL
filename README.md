# FuncionalGraphiQL

Para rodar o projeto, instale essas dependências:

"dependencies": {
    "express": "^4.17.1",
    "express-graphql": "0.6.12",
    "graphql": "0.13.2",
    "graphql-tools": "2.24.0",
    "knex": "0.14.6",
    "mysql": "2.15.0"
  }

Além disso, faz-se necessário a utilização do MySQL Workbench 8.0 CE + WampServer. 

Para inicializar, navegue até a pasta do projeto, adentre ao src e a api. Execute: "node server.js".
E abra no seu browser: http://localhost:4000/api

As consultas podem ser feitas da seguinte forma:

Para sacar:

mutation {
  
  sacar(id: "1", input: {
    numberaccount: "22"
saldo: 	10
  }) {
    id
    numberaccount
    saldo
  } 
}

Para depositar:

mutation {
  
  depositar(id: "1", input: {
    numberaccount: "22"
saldo: 	1000
  }) {
    id
    numberaccount
    saldo
  } 
}





