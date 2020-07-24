import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import HomeScreen from './src/components/Home';
import configureStore from './src/redux/ConfigureStore';

const Stack = createStackNavigator();
const { store, persistor } = configureStore(/* provide initial state if any */);


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
