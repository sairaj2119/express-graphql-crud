import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
dotenv.config();

import typeDefs from './typeDefs/index.js';
import resolvers from './resolvers/index.js';
import connectDB from './db.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req, res) => ({ req, res }),
});
const app = express();

app.use(express.json());
server.applyMiddleware({ app });

connectDB();
const PORT = process.env.PORT || 4000;
app.listen({ port: PORT }, () =>
  console.log(
    `Up and running at http://localhost:4000${server.graphqlPath}`.black.bgWhite
  )
);
