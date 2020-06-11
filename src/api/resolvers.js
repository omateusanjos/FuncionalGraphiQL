const db = require('../config/database')

module.exports = {
    Query: {

    
        async getSaldo(_, {id}) {
            return await db('clientes').where({id}).first()
        }
    },
    Mutation: {

        async sacar(_, { id, input}) {
            const saldoantigo = await db('clientes').where({id}).first()
           
            if(input.saldo > saldoantigo.saldo) {
                     throw new Error("Saldo Insuficiente")
            } else {
                     const result = await db('clientes').where({id}).first().update({     
                     saldo: saldoantigo.saldo - input.saldo          
                    })
                 }
                
            return await db('clientes').where ({ id }).first()
        },
        async depositar(_, { id, input}) {
           
            const saldoantigo = await db('clientes').where({id}).first()
            const result = await db('clientes').where({id}).first().update({  
                saldo: parseInt(saldoantigo.saldo) + parseInt(input.saldo)          
            })
        
            return await db('clientes').where ({ id }).first()
        }
    }
}

/*

const db = require('../config/database')

module.exports = {
    Query: {
        async getUser (_, {id}) {
            return await db('clientes').where({id}).first()
        },
        async getclientes(){
            return await db('clientes')
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const resultado = await db('clientes').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })
const id = result[0]
return await db('clientes').where ({ id }).first()
        }
    }
}

*/