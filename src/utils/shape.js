import PropTypes from 'prop-types';

const userShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

const commentShape = {
  id: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userShape),
};

const threadItemShape = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  user: PropTypes.shape(userShape),
  totalComments: PropTypes.number,
};

const threadDetailShape = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userShape),
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)),
};

const leaderboardItemShape = {
  user: PropTypes.shape(userShape),
  score: PropTypes.number,
};

export {
  threadItemShape,
  leaderboardItemShape,
  threadDetailShape,
  commentShape,
  userShape,
};
