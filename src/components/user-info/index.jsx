import React from 'react';
import LoadingSpinner from '../loading-spinner';

function UserInfo({
  name,
  username,
  email,
  address: { street, suite, city, zipcode, geo },
  phone,
  isLoading,
  error,
}) {
  if (isLoading) return <LoadingSpinner animation='border' />;

  if (error) return <span>{error.message}...</span>;

  return (
    <div>
      <h1 className='mb-3'>Информация о пользователе</h1>
      <div>
        <p>
          <b>Имя:</b> {name}
        </p>
        <p>
          <b>Логин:</b> {username}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>
        <p>
          <b>Город:</b> {city}
        </p>
        <p>
          <b>Улица:</b> {street}
        </p>
        <p>
          <b>Телефон:</b> {phone}
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
