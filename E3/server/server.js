const {ApolloServer,gql} = require('apollo-server');// Tag function to parse the schema

// GraphQL Schema. 
// It describes what our API can do
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;
//They have to match the type definitions of the Schema.
const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL world!👋',
  },
};
// Set up the server with ApolloServer
const server = new ApolloServer({typeDefs,resolvers});
server
  .listen({port: 9000})
  .then(serverInfo => console.log(`Server running at ${serverInfo.url}`));