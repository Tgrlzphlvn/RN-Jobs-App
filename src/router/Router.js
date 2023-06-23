import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import FavoritesStack from './FavoritesStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen
          name="FavoritesStack"
          component={FavoritesStack}
          options={{tabBarLabel: 'Favorites'}}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{tabBarLabel: 'Profile'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
