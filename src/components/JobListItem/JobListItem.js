import {View, Text} from 'react-native';
import React from 'react';
import {jobListItemStyles} from './JobListItemStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const JobListItem = ({item, onSelected}) => {

  return (
    <TouchableOpacity onPress={onSelected}>
      <View style={jobListItemStyles.container}>
        <Text style={jobListItemStyles.name}>{item.name}</Text>
        <View style={jobListItemStyles.bottomContainer}>
          <Text style={jobListItemStyles.company}>{item.company.name}</Text>
          <Text style={jobListItemStyles.level}>{item.levels[0].name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobListItem;
