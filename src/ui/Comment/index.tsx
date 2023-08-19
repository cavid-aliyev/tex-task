import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const Comments: React.FC = () => {
  const comments = useSelector((state: RootState) => state.comments.comments);

  if (comments.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No Comment</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {comments.map(comment => (
        <Text key={comment.id}>{comment.text}</Text>
      ))}
    </View>
  );
};
export default Comments;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainWhite,
    borderRadius: 16,
    height: 300,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
