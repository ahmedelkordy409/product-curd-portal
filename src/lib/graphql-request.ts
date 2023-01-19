import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('/api/graphql')

// Set a single header
client.setHeader('authorization', 'Bearer MY_TOKEN')


export default client