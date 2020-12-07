import { gql } from 'apollo-server-express';

export const query = gql`
  type Query {
    posts: [Post!]!
    post(id: String!): Post!
  }
`;
