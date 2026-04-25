import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../constants/theme';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.04,
  },
  placeholderText: {
    fontSize: width * 0.04,
    color: COLORS.text,
  },
});
