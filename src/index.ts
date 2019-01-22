import { ApolloServer, gql }  from 'apollo-server-express';
import express from 'express';
import * as MediaToken from './components/MediaToken';
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    dummy: String
  }
  type Mutation {
    buildMediaToken(appId: String, expireTs: Int): MediaToken
  }
  type MediaToken {
    token: String
    startTs: Int
    expiredTs: Int
  }
`;

// Provide resolver functions for your schema fields
const resolvers = Object.assign({}, MediaToken.resolvers);

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  console.log(`🚀  Server ready at http://localhost:${port}${server.graphqlPath}`),
);