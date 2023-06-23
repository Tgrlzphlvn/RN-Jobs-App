import {View, Text} from 'react-native';
import React from 'react';
import {emptyViewStyles} from './EmptyViewStyles';

const EmptyView = () => {
  return (
    <View style={emptyViewStyles.container}>
      <View style={emptyViewStyles.box}>
        <Text style={emptyViewStyles.text}>
          This page is empty. You are append your like jobs this page.
        </Text>
      </View>
    </View>
  );
};

export default EmptyView;
