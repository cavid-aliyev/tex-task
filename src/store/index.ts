import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './reducers/posts';
import commentReducer from './reducers/comments';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
