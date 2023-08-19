import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.greyRegular,
    flex: 1,
  },
  postTitle: {
    color: COLORS.mainRed,
    backgroundColor: COLORS.mainWhite,
    paddingVertical: 20,
    textAlign: 'center',
    borderRadius: 16,
    fontSize: 30,
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  postBody: {
    color: COLORS.mainBlack,
    backgroundColor: COLORS.mainWhite,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
    fontSize: 14,
    height: 400,
  },
  commentContainer: {
    paddingVertical: 30,
  },
  commentTitle: {
    fontSize: 20,
    color: COLORS.mainRed,
    backgroundColor: COLORS.mainBlack,
    width: 160,
    textAlign: 'center',
    borderRadius: 7,
    marginBottom: 10,
  },
  inputContainer: {paddingBottom: 30},
});
export default styles;
