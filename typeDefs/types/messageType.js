import { gql } from 'apollo-server-express';

export const messageType = gql`
  type Message {
    type: String!
    message: String!
  }
`;
