/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostsList from '../../components/posts-list';
import { requestPosts } from '../../redux/actions/creators/posts';

function Home() {
  const { data, loading, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPosts());
  }, []);

  return (
    <div>
      <h1>Список постов</h1>
      <PostsList posts={data} isLoading={loading} error={error} />
    </div>
  );
}

export default Home;
