import {View} from 'react-native';
import React from 'react';
import JobList from '../../components/JobList/JobList';
import useFetchData from '../../hooks/useFetchData';
import StateChecker from '../../components/StateChecker/StateChecker';
import {homeStyles} from './HomeStyles';

const Home = ({navigation}) => {
  const {loading, error, data} = useFetchData(
    'https://www.themuse.com/api/public/jobs?page=1',
  );

  return (
    <View style={homeStyles.container}>
      {loading || error ? (
        StateChecker(loading, error)
      ) : (
        <JobList
          data={data.results}
          navigation={navigation}
          title="Active Jobs"
        />
      )}
    </View>
  );
};

export default Home;
