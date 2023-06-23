import React from 'react';

//? Components
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const StateChecker = (loading, error) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
};

export default StateChecker;
