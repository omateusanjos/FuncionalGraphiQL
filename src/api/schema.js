const resolvers = require('./resolvers')
const {makeExecutableSchema} = require('graphql-tools')
const clientesAttribs = `
    id: ID
    numberaccount: String!
    saldo: Float!
`
const typeDefs = `
    type User {
      ${clientesAttribs}
    }

    type Query {
        getSaldo(id: ID!): User
    }

    input UserInput {
        ${clientesAttribs}
    }

    type Mutation {
        sacar(id: ID!, input: UserInput): User
        depositar(id: ID!, input: UserInput): User
    }

`
module.exports = makeExecutableSchema({
    typeDefs, 
    resolvers
})