// Update with your config settings.
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports =  knex 

//knex('clientes').insert({
//numberaccount: 15,
//saldo: 5000
//}).then(data => console.log(data))

//knex('clientes').select('*').then(resultado => console.log(resultado))