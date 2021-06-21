const express = require('express');
import { ApolloServer, gql } from 'apollo-server-express';
import UserAPI from './datasource/userAPI';
import resolvers from './resolver'
import typeDefs from './typeDef';

export const startApolloServer = async (app) => {
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
