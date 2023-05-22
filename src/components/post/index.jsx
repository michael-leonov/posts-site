import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import PostComments from './post-comments';
import UserPlugIcon from '../../assets/static/user-plug.png';

function Post({ id, title, body, userId }) {
  return (
    <Col>
      <Link to={`/users/${userId}`}>
        <img src={UserPlugIcon} alt='аватар' width={50} height={50} />
      </Link>

      <h3>{title || 'Заголовок'}</h3>
      <p>{body || 'Описание'}</p>
      <PostComments postId={id} />
    </Col>
  );
}

export default Post;
