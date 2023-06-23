import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//? Screens
import Home from '../screens/Home/Home';
import Detail from '../screens/Home/Detail/Detail';
import {Text} from 'react-native-render-html';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
