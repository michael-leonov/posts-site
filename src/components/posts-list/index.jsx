import React from 'react';
import { Row } from 'react-bootstrap';
import Post from '../post';

function PostsList({ posts, isLoading }) {
  const isEmpty = !isLoading && !posts?.length;

  if (isLoading) return <span>Загрузка...</span>;

  return (
    <Row xs={1}>
      {isEmpty ? (
        <>Список пуст</>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </Row>
  );
}

export default PostsList;
