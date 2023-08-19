import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import Post from '../../ui/Post/Post';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {fetchPosts} from '../../store/reducers/posts/thunk';

const Posts: React.FC = () => {
  const data = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(data);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Post />
        <Post />
        <Post />
        <Post />
      </View>
    </SafeAreaView>
  );
};
export default Posts;
