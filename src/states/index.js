import { configureStore } from '@reduxjs/toolkit';
import talkDetailReducer from './talkDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

const store = configureStore({
  reducer: {
    users: usersReducer,
    threads: threadsReducer,
    talkDetail: talkDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer
  }
});

export default store;
