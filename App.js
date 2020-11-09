/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './src/redux/configureStore';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef, isReadyRef } from './src/services/RootNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/containers/Home';
import PokemonDetails from './src/containers/PokemonDetails';

let store = configureStore();

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} onReady={() => {isReadyRef.current = true;}}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
