import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import { requestUser } from '../../redux/actions/creators/user';
import { requestPosts } from '../../redux/actions/creators/posts';
import UserInfo from '../../components/user-info';
import { HOME_ROUTE } from '../../utils/consts';
import PostsList from '../../components/posts-list';

function User() {
  const { id } = useParams();

  const { data, loading, error } = useSelector((state) => state.user);

  const getPostsByUserId = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUser(id));
    dispatch(requestPosts({ userId: id }));
  }, []);

  return (
    <div className='d-flex flex-column row-gap-3'>
      <LinkContainer to={HOME_ROUTE}>
        <Button className='mb-2 align-self-baseline'> Назад</Button>
      </LinkContainer>

      {data &&
        data.map((user) => (
          <UserInfo key={user.id} {...user} isLoading={loading} error={error} />
        ))}

      <div>
        <h2>Список постов пользователя</h2>
        <PostsList
          posts={getPostsByUserId.data}
          isLoading={getPostsByUserId.loading}
          error={getPostsByUserId.error}
        />
      </div>
    </div>
  );
}

export default User;
