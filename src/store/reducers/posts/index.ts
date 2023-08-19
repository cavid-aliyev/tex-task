import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IPost} from '../../../pages/types/post';
import {
  fetchPosts,
  fetchAddPost,
  fetchDeletePost,
  fetchEditPost,
} from './thunk';

export interface PostState {
  posts: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<IPost[]>) => {
          state.loading = false;
          state.posts = action.payload;
          state.error = null;
        },
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      })
      .addCase(fetchAddPost.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      })
      .addCase(
        fetchAddPost.fulfilled,
        (state, action: PayloadAction<IPost | null>) => {
          state.loading = false;
          if (action.payload !== null) {
            state.posts.push(action.payload);
            state.error = null;
          }
        },
      )
      .addCase(fetchDeletePost.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchDeletePost.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.loading = false;
          state.posts = state.posts.filter(post => post.id !== action.payload);
          state.error = null;
        },
      )
      .addCase(fetchDeletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      })
      .addCase(
        fetchEditPost.fulfilled,
        (state, action: PayloadAction<IPost>) => {
          state.loading = false;
          const editedPost = action.payload;
          const editedIndex = state.posts.findIndex(
            post => post.id === editedPost.id,
          );

          if (editedIndex !== -1) {
            state.posts[editedIndex] = editedPost;
          }

          state.error = null;
        },
      );
  },
});

export const {} = postsReducer.actions;

export default postsReducer.reducer;
