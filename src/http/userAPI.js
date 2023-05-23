import { $host } from './index';

export const getUserById = async (userId) => {
  const { data } = await $host.get('/users', {
    params: { id: userId },
  });

  return data;
};
