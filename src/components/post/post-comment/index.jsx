import React from 'react';
import { Stack } from 'react-bootstrap';

function PostComment({ email, body }) {
  return (
    <Stack gap={1}>
      <p>
        <b>Email пользователя:</b> {email}
      </p>
      <p>
        <b>Комментарий:</b> {body}
      </p>
    </Stack>
  );
}

export default PostComment;
