import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Styles from '../theme/Styles';

function StaticContentComponent(props) {
  const { message, showLoader } = props;
  return (
    <View style={[Styles.backWhite, Styles.noContentFoundContainer]}>
      {
        showLoader ?
          <ActivityIndicator size="large" color="#000"></ActivityIndicator>
          :
          null
      }
      <Text style={[Styles.noContentFoundContainerText]}>{message}</Text>
    </View>
  );
}

export default StaticContentComponent;