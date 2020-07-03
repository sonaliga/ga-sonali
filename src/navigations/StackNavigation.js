import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './scenes/Home';
import CountryDetail from './scenes/CountryDetail';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CountryDetail" component={CountryDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
