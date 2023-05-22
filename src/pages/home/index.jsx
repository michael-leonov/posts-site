/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostsList from '../../components/posts-list';
import { requestPosts } from '../../redux/actions/creators/posts';

function Home({ requestPosts, posts }) {
  useEffect(() => {
    requestPosts();
  }, [requestPosts]);

  return (
    <div>
      <h1>Список постов</h1>
      <PostsList posts={posts.data} isLoading={posts.loading} />
    </div>
  );
}

export default connect(({ posts }) => ({ posts }), {
  requestPosts,
})(Home);
