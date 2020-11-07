import { Platform } from 'react-native';

const cardMaker = (elevation, shadowColor) => {
  return {
    ...Platform.select({
      android: { elevation: elevation },
      ios: {
        shadowColor: shadowColor ? shadowColor : 'black',
        shadowOffset: {
          width: 0,
          height: elevation
        },
        shadowOpacity: 0.4,
        shadowRadius: elevation
      }
    })
  };
};

export default cardMaker;