import {View, Text} from 'react-native';
import React from 'react';
import {favButtonStyles} from './FavButtonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FavButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={favButtonStyles.container}>
        <Text style={favButtonStyles.text}>Add Favorites</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FavButton;
