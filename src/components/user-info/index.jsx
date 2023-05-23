import React from 'react';

function UserInfo({
  name,
  userName,
  email,
  address: { street, suite, city, zipcode, geo },
  phone,
}) {
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
