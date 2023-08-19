import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

interface IButton {
  title: string;
  onPress?: (params?: any) => void;
}

const Button: React.FC<IButton> = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.mainRed,
    borderRadius: 15,
  },
  btnText: {
    color: COLORS.mainWhite,
    textAlign: 'center',
  },
});
