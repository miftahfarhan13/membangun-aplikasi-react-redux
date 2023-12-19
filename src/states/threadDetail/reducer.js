import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      return {
        ...threadDetail,
        likes: threadDetail.likes.includes(action.payload.ownerId)
          ? threadDetail.likes.filter((id) => id !== action.payload.ownerId)
          : threadDetail.likes.concat(action.payload.ownerId),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
