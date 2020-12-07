import { gql } from 'apollo-server-express';

export const postType = gql`
  type Post {
    _id: String!
    title: String!
    body: String!
  }
`;
