import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerLogo}>Posts</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.mainRed,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerLogo: {
    fontSize: 20,
    color: COLORS.mainWhite,
  },
});
