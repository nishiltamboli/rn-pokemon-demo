import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  flex1: {
    flex: 1
  },
  flexGrow1: {
    flexGrow: 1
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  alignCenter: {
    alignItems: 'center'
  },
  textUpper: {
    textTransform: 'uppercase'
  },
  textLower: {
    textTransform: 'lowercase'
  },
  mainContainer: {
    flex: 1
  },
  backWhite: {
    backgroundColor: '#fff',
  },
  noContentFoundContainer: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  noContentFoundContainerText: {
    color: Colors.textLight,
    paddingTop: 10,
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize'
  }
});