import {Alert, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../Button';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {fetchDeletePost, fetchEditPost} from '../../store/reducers/posts/thunk';
import {IPost} from '../../pages/types/post';
import CustomModal from '../Modal';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../constants/routes';

type PostProps = NativeStackScreenProps<RootStackParamList, 'Posts', 'item'>;

const Post: React.FC<IPost> = ({id, title, body}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation: PostProps = useNavigation();

  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const handleDelete = (idx: number) => {
    Alert.alert('Notification', 'Are u sure?', [
      {text: 'No', style: 'cancel'},
      {text: 'Yes', onPress: () => dispatch(fetchDeletePost(idx))},
    ]);
  };

  const handleVisible = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSave = (eTitle: string, eBody: string) => {
    dispatch(fetchEditPost({id, title: eTitle, body: eBody}));
  };

  const handleNavigatePostDetail = () => {
    const item = {id, title, body};
    navigation.navigate(routes.PostDetail, {item});
  };

  return (
    <View style={styles.container}>
      <Text onPress={handleNavigatePostDetail} style={styles.postTitle}>
        {title}
      </Text>
      <Text style={styles.postBody}>{body}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={handleVisible} />
        <Button title="Delete" onPress={() => handleDelete(id)} />
      </View>

      {modalVisible && (
        <CustomModal
          editableObj={{id, title, body}}
          isVisible={modalVisible}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </View>
  );
};
export default Post;
