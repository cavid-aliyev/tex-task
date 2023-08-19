import {IPost} from './../../../pages/types/post';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {addPost, deletePost, getPosts} from '../../../api/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await getPosts();
    return response;
  } catch (error) {
    throw Error('Failed to fetch posts');
  }
});
export const fetchAddPost = createAsyncThunk(
  'posts/fetchAddPosts',
  async (obj: IPost) => {
    try {
      const response = await addPost(obj);
      return response;
    } catch (error) {
      throw Error('Failed to fetch posts');
    }
  },
);
export const fetchDeletePost = createAsyncThunk(
  'posts/fetchDeletePost',
  async (id: number) => {
    try {
      // const response = await deletePost(id);

      return id;
    } catch (error) {
      throw Error('Failed to delete post');
    }
  },
);
export const fetchEditPost = createAsyncThunk(
  'posts/fetchEditPost',
  async (obj: IPost) => {
    try {
      return obj;
    } catch (error) {
      throw Error('Failed to edit post');
    }
  },
);
