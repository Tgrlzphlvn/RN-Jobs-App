import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//? Screens
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
