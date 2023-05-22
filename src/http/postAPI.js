import { $host } from './index';

export const getPosts = async () => {
  const { data } = await $host.get('/posts');

  return data;
};
