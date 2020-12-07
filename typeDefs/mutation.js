import { gql } from 'apollo-server-express';

export const mutation = gql`
  type Mutation {
    createPost(title: String!, body: String!): Post!
    updatePost(id: String!, title: String!, body: String!): Post!
    deletePost(id: String!): Message!
  }
`;
