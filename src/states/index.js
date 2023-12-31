import { configureStore } from '@reduxjs/toolkit';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadDetailReducer from './threadDetail/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';

export const getThreadsState = (state) => state.threads;
export const getUsersState = (state) => state.users;
export const getAuthUser = (state) => state.authUser;

const store = configureStore({
  reducer: {
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
    authUser: authUserReducer,
    isPreload: isPreloadReducer
  }
});

export default store;
