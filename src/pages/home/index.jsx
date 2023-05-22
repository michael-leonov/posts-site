/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostsList from '../../components/posts-list';
import { requestPosts } from '../../redux/actions/creators/posts';

function Home() {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPosts());
  }, []);

  return (
    <div>
      <h1>Список постов</h1>
      <PostsList posts={posts.data} isLoading={posts.loading} />
    </div>
  );
}

export default Home;
