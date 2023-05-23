/* eslint-disable consistent-return */
import React from 'react';
import PostComment from '../post-comment';

function PostCommentsList({ comments, isLoading, error }) {
  if (isLoading) return;

  if (error) return <span>{error.message}...</span>;

  return (
    <div>
      {comments.map((comment) => (
        <PostComment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

export default PostCommentsList;
