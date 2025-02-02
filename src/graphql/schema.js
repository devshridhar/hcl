const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Token {
        token: String!
        name: String!
        email: String!
    }

    type Query {
        welcome: String
        getUser(email: String!): User
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): String
        login(email: String!, password: String!): Token
    }
`;

module.exports = { typeDefs };
