import {IComment} from './../../../pages/types/comment';
import {createSlice} from '@reduxjs/toolkit';
import {fetchComments, fetchPostComment} from './thunk';

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
  extraReducers: builder => {
    builder
      .addCase(fetchComments.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const [commentArray, postId] = action.payload;

        state.loading = false;
        state.comments = commentArray.filter(
          (comment: IComment) => comment.postId === postId,
        );

        state.error = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
    builder
      .addCase(fetchPostComment.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostComment.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload !== null) {
          state.comments.push(action.payload);
          state.error = null;
        }
      })
      .addCase(fetchPostComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export const {} = commentReducer.actions;

export default commentReducer.reducer;
