import { gql } from 'apollo-server-express';

export const mutation = gql`
  type Mutation {
    createPost(title: String, body: String): Post!
  }
`;
