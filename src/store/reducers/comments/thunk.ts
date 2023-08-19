import {getComments, postComment} from '../../../api/comment';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {IComment} from '../../../pages/types/comment';

export const fetchComments = createAsyncThunk(
  'posts/fetchComments',
  async (postId: number) => {
    try {
      const response: IComment[] = await getComments();
      return [response, postId];
    } catch (error) {
      throw Error('Failed to fetch posts');
    }
  },
);

export const fetchPostComment = createAsyncThunk(
  'posts/fetchPostComment',
  async (newComment: IComment) => {
    try {
      const response = await postComment(newComment);

      return response;
    } catch (error) {
      throw Error('Failed to fetch posts');
    }
  },
);
