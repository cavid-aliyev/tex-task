import instance from './index';
import {IComment} from '../pages/types/comment';

export const getComments = async (): Promise<IComment[]> => {
  try {
    const resp = await instance.get('comments');

    return resp.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const postComment = async (
  newComment: IComment,
): Promise<IComment | null> => {
  try {
    const resp = await instance.post('comments', newComment);

    return resp.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
