import { $host } from './index';

export const getPosts = async (params) => {
  const { data } = await $host.get('/posts', {
    params: { ...params },
  });

  return data;
};
