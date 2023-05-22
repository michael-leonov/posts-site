import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import PostComments from './post-comments';
import UserPlugIcon from '../../assets/static/user-plug.png';
import { USER_DETAILS_ROUTE } from '../../utils/consts';
import { requestComments } from '../../redux/actions/creators/posts';

function Post({ id, title, body, userId }) {
  const [isViewComments, setIsViewComments] = useState(false);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    setIsViewComments(!isViewComments);

    dispatch(requestComments(id));
  };

  return (
    <Col>
      <Link to={`${USER_DETAILS_ROUTE}/${userId}`}>
        <img src={UserPlugIcon} alt='аватар' width={50} height={50} />
      </Link>

      <h3>{title}</h3>
      <p>{body}</p>

      <button type='button' onClick={onClickHandler}>
        Комментарии
      </button>

      {isViewComments && <PostComments postId={id} />}
    </Col>
  );
}

export default Post;
