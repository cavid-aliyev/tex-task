import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

interface IButton {
  title: string;
}

const Button: React.FC<IButton> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.btnText}>{title}</Text>
    </View>
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
  },
});
