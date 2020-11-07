import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import Styles from '../theme/Styles';

function PokemonDetails() {
  return (
    <View style={[Styles.mainContainer]}>
      <Text>This is PokemonDetails screen</Text>
    </View>
  );
}

export default PokemonDetails;