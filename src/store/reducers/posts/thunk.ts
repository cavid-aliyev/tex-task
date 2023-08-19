import {createAsyncThunk} from '@reduxjs/toolkit';
import {getPosts} from '../../../api/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await getPosts();
    return response;
  } catch (error) {
    throw Error('Failed to fetch posts');
  }
});
