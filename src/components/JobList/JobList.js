import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import JobListHeader from '../JobListHeader/JobListHeader';
import JobListItem from '../JobListItem/JobListItem';
import EmptyView from '../Empty/EmptyView';

const JobList = ({navigation, data, title}) => {
  const itemRenderer = ({item}) => (
    <JobListItem item={item} onSelected={() => onSelected(item)} />
  );

  const onSelected = item => navigation.navigate('Detail', {item: item});

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => JobListHeader({text: title})}
      renderItem={itemRenderer}
      ListEmptyComponent={EmptyView}
    />
  );
};

export default JobList;
