import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import Post from '../../ui/Post/Post';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {fetchAddPost, fetchPosts} from '../../store/reducers/posts/thunk';
import Button from '../../ui/Button';
import CustomModal from '../../ui/Modal';

const Posts: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch<AppDispatch>();
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  console.log(posts, 'aaa');

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleVisible = () => {
    setModalVisible(true);
  };
  const handleClose = () => {
    setModalVisible(false);
  };
  const handleSave = (title: string, body: string) => {
    dispatch(fetchAddPost({id: Math.random() * 10, title, body}));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {posts?.map(post => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}

        <Button title="Add post" onPress={handleVisible} />
        {modalVisible && (
          <CustomModal
            isVisible={modalVisible}
            onClose={handleClose}
            onSave={handleSave}
          />
        )}
      </View>
    </ScrollView>
  );
};
export default Posts;
