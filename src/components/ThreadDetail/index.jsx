import ThreadDetailCard from './ThreadDetailCard';
import { threadDetailShape, userShape } from '../../utils/shape';
import ThreadComment from './ThreadComment';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';

function ThreadDetail({ thread, authUser }) {
  if (thread === null) {
    return null;
  }
  return (
    <>
      <ThreadDetailCard {...thread} />
      {authUser && <CommentForm />}
      <ThreadComment comments={thread?.comments} />
    </>
  );
}

ThreadDetail.propTypes = {
  ...threadDetailShape,
  authUser: PropTypes.shape(userShape)
};

export default ThreadDetail;
