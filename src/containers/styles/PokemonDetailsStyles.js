import { StyleSheet } from 'react-native';
import Styles from '../../theme/Styles';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  pokemonMainDetailsContainer: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  pokemonNameText: {
    color: Colors.textDark,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "600",
    textTransform: 'capitalize',
    paddingBottom: 5
  },
  pokemonMainAttributeText: {
    color: Colors.textLight,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: "600",
    paddingBottom: 5
  },
  pokemonOtherAttributeLast: {
    paddingBottom: 50,
  },
  pokemonOtherDetailsContainerTitle: {
    paddingVertical: 20,
    textAlign: 'center',
    color: Colors.textDark,
    fontSize: 18,
    fontWeight: '600',
  },
  pokemonOtherAttribute: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    ...Styles.flexRow,
    alignItems: 'center',
  },
  pokemonOtherAttributeTitle: {
    paddingRight: 10,
    textAlign: 'left',
    color: Colors.textDark,
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
    flex: 1,
  },
  pokemonOtherAttributeValue: {
    textAlign: 'left',
    color: Colors.textLight,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
    flex: 1,
  },
});