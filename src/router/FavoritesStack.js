import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//? Screens
import Favorites from '../screens/Favorites/Favorites';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
