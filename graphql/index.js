const express = require('express');
import { ApolloServer, gql } from 'apollo-server-express';
import UserAPI from './datasource/userAPI';

export const startApolloServer = async (app) => {
    const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

    const resolvers = {
        Query: {
            hello: () => 'Hello world!',
        },
    };

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => {
            return {
                userAPI: new UserAPI()
            }
        }
    });
    await server.start();

    server.applyMiddleware({ app });
    return server;
}
