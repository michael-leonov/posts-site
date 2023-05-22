import React from 'react';

function PostComment({ email, body }) {
  return (
    <div>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
}

export default PostComment;
