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

export const addPost = async (obj: IPost): Promise<IPost | null> => {
  try {
    const resp = await instance.post('posts', obj);

    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deletePost = async (id: number) => {
  try {
    const resp = await instance.delete(`posts/${id}`);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
