import { query } from './query.js';
import { mutation } from './mutation.js';
import customTypes from './types/index.js';

export default [query, mutation, ...customTypes];
