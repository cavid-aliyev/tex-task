import {View, TextInput, StyleSheet} from 'react-native';

import React from 'react';
import {COLORS} from '../../constants';

const Input: React.FC = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: COLORS.mainWhite,
  },
});
