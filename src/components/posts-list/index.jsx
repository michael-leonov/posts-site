import React from 'react';
import { Row } from 'react-bootstrap';
import Post from '../post';
import LoadingSpinner from '../loading-spinner';

function PostsList({ posts, isLoading, error }) {
  const isEmpty = !isLoading && !posts?.length;

  if (isLoading) return <LoadingSpinner animation='border' />;

  if (error) return <span>{error.message}...</span>;

  return (
    <Row xs={1}>
      {isEmpty ? (
        <p>Список пуст</p>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </Row>
  );
}

export default PostsList;
