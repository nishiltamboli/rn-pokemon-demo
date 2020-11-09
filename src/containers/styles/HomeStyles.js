import { StyleSheet } from 'react-native';
import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  pokemonItem: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    ...Styles.flexRow,
    justifyContent: 'space-between',
    ...Styles.alignCenter
  },
  pokemonItemText: {
    color: Colors.textDark,
    fontSize: 18,
    fontWeight: "600",
    textTransform: 'capitalize'
  }
});