import mongoose from 'mongoose';
import Post from '../models/Post.js';

export default {
  Query: {
    posts: async () => {
      const posts = await Post.find();
      return posts;
    },
    post: async (_, { id }) => {
      const post = await Post.findById(id);
      console.log(post);
      return post;
    },
  },
  Mutation: {
    createPost: async (_, { title, body }) => {
      console.log(title, '---', body);
      try {
        console.log('inside try');
        const post = await Post.create({ title, body });
        return post;
      } catch (error) {
        console.log('Error in creating a post');
      }
    },
  },
};
