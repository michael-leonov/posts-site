import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Spinner, Stack } from 'react-bootstrap';
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
    <Col className='py-4'>
      <Stack gap={2}>
        <Link to={`${USER_ROUTE}/${userId}`}>
          <img src={UserPlugIcon} alt='аватар' width={50} height={50} />
        </Link>

        <h3 className='fs-3'>{title}</h3>
        <p className='fs-6 mb-3'>{body}</p>

        <Stack gap={2}>
          <Button
            variant='primary'
            onClick={onClickHandler}
            className={`${
              isViewComments ? 'mb-2' : ''
            } align-self-center align-self-md-baseline`}
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
        </Stack>
      </Stack>
    </Col>
  );
}

export default Post;
