import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../constants/routes';
import Comments from '../../ui/Comment';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

type PostDetail = NativeStackScreenProps<RootStackParamList, 'PostDetail'>;

const PostDetail = ({route}: PostDetail) => {
  const data = route?.params || {};
  const [commentValue, setCommentValue] = React.useState<string>('');

  console.log(commentValue);

  const handleChangeComment = (text: string) => {
    setCommentValue(text);
  };

  const handleSendComment = () => {};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.postTitle}>{data.item.title}</Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.postBody}>{data.item.body}</Text>

        <View style={styles.commentContainer}>
          <Text style={styles.commentTitle}>Add Comment</Text>
          <View style={styles.inputContainer}>
            <Input
              value={commentValue}
              onChangeText={handleChangeComment}
              placeholder="Add comment"
            />
            <Button title="send" onPress={handleSendComment} />
          </View>
          <Comments />
        </View>
      </View>
    </ScrollView>
  );
};
export default PostDetail;
