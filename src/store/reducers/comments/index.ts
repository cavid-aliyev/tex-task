import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IComment} from '../../../pages/types/comment';

export interface CommentState {
  comments: IComment[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  //   extraReducers: builder => {},
});

export const {} = commentReducer.actions;

export default commentReducer.reducer;
