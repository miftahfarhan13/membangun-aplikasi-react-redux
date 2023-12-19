import React from 'react';
import ThreadDetailCard from './ThreadDetailCard';
import { threadDetailShape, commentShape } from '../../utils/shape';
import ThreadComment from './ThreadComment';

function ThreadDetail({ thread }) {
  if (thread === null) {
    return null;
  }
  return (
    <>
      <ThreadDetailCard {...thread} />
      <ThreadComment comments={thread?.comments} />
    </>
  );
}

ThreadDetail.propTypes = {
  ...threadDetailShape
};

export default ThreadDetail;
