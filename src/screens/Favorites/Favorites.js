import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import JobList from '../../components/JobList/JobList';
import {favoritesStyles} from './FavoritesStyles';

const Favorites = ({navigation}) => {
  const favoriteJobs = useSelector(state => state.favorites.favoritesList);

  return (
    <View style={favoritesStyles.container}>
      <JobList
        data={favoriteJobs}
        navigation={navigation}
        title="Favorite Jobs"
      />
    </View>
  );
};

export default Favorites;
