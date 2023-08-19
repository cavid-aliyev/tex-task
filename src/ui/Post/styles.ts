import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 120,
    backgroundColor: COLORS.greyRegular,
    borderRadius: 16,
    alignItems: 'center',
    gap: 10,
  },
  postTitle: {
    paddingTop: 5,
    fontSize: 17,
    color: COLORS.mainWhite,
  },
  postBody: {
    color: COLORS.mainWhite,
  },
});
export default styles;
