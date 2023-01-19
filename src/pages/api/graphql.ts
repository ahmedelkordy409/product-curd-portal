import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
//
import { resolvers } from '@server/resolvers'
import { typeDefs } from '@server/schemas'


const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);