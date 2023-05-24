/* eslint-disable consistent-return */
import React from 'react';
import { Stack } from 'react-bootstrap';
import PostComment from '../post-comment';

function PostCommentsList({ comments, isLoading, error }) {
  if (isLoading) return;

  if (error) return <span>{error.message}...</span>;

  return (
    <Stack gap={3}>
      {comments.map((comment) => (
        <PostComment key={comment.id} {...comment} />
      ))}
    </Stack>
  );
}

export default PostCommentsList;
