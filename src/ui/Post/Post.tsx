import {Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../Button';

const Post: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.postTitle}>Post Title</Text>
        <Text style={styles.postBody}>Post Body</Text>
        <Button title="Edit" />
      </View>
    </SafeAreaView>
  );
};
export default Post;
