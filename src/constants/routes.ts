import {IPost} from '../pages/types/post';

interface Routes {
  // Pages
  Posts: string;
  PostDetail: string;
}

const routes: Routes = {
  // Pages
  Posts: 'Posts',
  PostDetail: 'PostDetail',
};

export type RootStackParamList = {
  Posts: undefined;
  PostDetail: {
    item: IPost;
  };
};

export default routes;
