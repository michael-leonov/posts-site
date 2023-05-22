import React from 'react';

function PostComments({ postId, email, body }) {
  return (
    <div>
      <h4>{email}</h4>
      <p>{body}</p>
    </div>
  );
}

export default PostComments;
