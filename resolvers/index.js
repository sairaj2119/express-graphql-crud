import postResolver from './postResolver.js';

export default {
  Query: {
    ...postResolver.Query,
  },
  Mutation: {
    ...postResolver.Mutation,
  },
};
