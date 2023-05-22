import React from 'react';
import { Row } from 'react-bootstrap';
import Post from '../post';

function PostsList() {
  return (
    <Row xs={1}>
      {Array.from({ length: 5 }, (_v, k) => (
        <Post key={k} />
      ))}
    </Row>
  );
}

export default PostsList;
