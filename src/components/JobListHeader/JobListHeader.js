import {View, Text} from 'react-native';
import React from 'react';
import {jobListHeaderStyles} from './JobListHeaderStyles';

const JobListHeader = ({text}) => {
  return <Text style={jobListHeaderStyles.title}>{text}</Text>;
};

export default JobListHeader;
