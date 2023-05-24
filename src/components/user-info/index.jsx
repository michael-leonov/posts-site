import React from 'react';
import LoadingSpinner from '../loading-spinner';

function UserInfo({
  name,
  userName,
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
      <p>{name}</p>
      <p>{userName}</p>
      <p>{email}</p>
      <p>{city}</p>
      <p>{street}</p>
      <p>{phone}</p>
    </div>
  );
}

export default UserInfo;
