import instance from './index';
import {IPost} from '../pages/types/post';

export const getPosts = async (): Promise<IPost[]> => {
  try {
    const resp = await instance.get('posts');

    return resp.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
