import { $host } from './index';

export const getPostComments = async (postId) => {
  const { data } = await $host.get('/comments', {
    params: { postId },
  });

  return data;
};
