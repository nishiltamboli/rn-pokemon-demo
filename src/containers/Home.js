import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import Styles from '../theme/Styles';

function Home() {
  return (
    <View style={[Styles.mainContainer]}>
      <Text>This is home screen</Text>
    </View>
  );
}

export default Home;