import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PostCommentsList from './post-comments-list';
import UserPlugIcon from '../../assets/static/user-plug.png';
import { USER_ROUTE } from '../../utils/consts';
import { requestComments } from '../../redux/actions/creators/comments';

function Post({ id, title, body, userId }) {
  const [isViewComments, setIsViewComments] = useState(false);

  const { data, loading, error } = useSelector((state) => state.comments);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    setIsViewComments(!isViewComments);

    if (!isViewComments) dispatch(requestComments(id));
  };

  return (
    <Col>
      <Link to={`${USER_ROUTE}/${userId}`}>
        <img src={UserPlugIcon} alt='аватар' width={50} height={50} />
      </Link>

      <h3>{title}</h3>
      <p>{body}</p>

      <div className='d-flex flex-column'>
        <Button
          variant='primary'
          onClick={onClickHandler}
          style={{ maxWidth: '320px' }}
        >
          {loading ? (
            <>
              Загружаю...
              <Spinner animation='border' size='sm' />
            </>
          ) : isViewComments ? (
            'Скрыть комментарии'
          ) : (
            'Комментарии'
          )}
        </Button>
        {isViewComments && (
          <PostCommentsList
            comments={data[id]}
            isLoading={loading}
            error={error}
          />
        )}
      </div>
    </Col>
  );
}

export default Post;
