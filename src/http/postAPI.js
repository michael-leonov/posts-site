import axios from 'axios';
import { $host } from './index';

export const getPosts = async () => {
  const { data } = await $host.get('/posts');

  return data;
};

export const getPostComments = async (postId) => {
  const { data } = await $host.get('/comments', {
    params: { postId },
  });

  return data;
};
