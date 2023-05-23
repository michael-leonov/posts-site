import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestUser } from '../../redux/actions/creators/user';
import UserInfo from '../../components/user-info';
import { HOME_ROUTE } from '../../utils/consts';

function User() {
  const { id } = useParams();

  const { data, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUser(id));
  }, []);

  return (
    <div>
      <Link to={HOME_ROUTE} className='text-decoration-none'>
        Назад
      </Link>
      {data &&
        data.map((user) => (
          <UserInfo key={user.id} {...user} isLoading={loading} error={error} />
        ))}
    </div>
  );
}

export default User;
