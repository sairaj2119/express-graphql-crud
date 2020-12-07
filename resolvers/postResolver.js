import mongoose from 'mongoose';
import Post from '../models/Post.js';
import { ApolloError } from 'apollo-server-express';

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
        return;
      }
    },
    updatePost: async (_, { id, title, body }) => {
      const post = await Post.findById(id);
      if (!post) {
        throw new Error('Post not found');
        return;
      }
      post.title = title || post.title;
      post.body = body || post.body;
      await post.save();
      return post;
    },
    deletePost: async (_, { id }) => {
      await Post.findByIdAndDelete(id);
      return {
        type: 'success',
        message: 'Post deleted successfully',
      };
    },
  },
};
