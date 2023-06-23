import {configureStore} from '@reduxjs/toolkit';
import FavoriteSlice from './FavoriteSlice';

export default configureStore({
  reducer: {
    favorites: FavoriteSlice,
  },
});
