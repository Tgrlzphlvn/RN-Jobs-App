import {createSlice} from '@reduxjs/toolkit';

const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesList: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoritesList = state.favoritesList.concat(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
