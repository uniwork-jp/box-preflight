import { createSlice } from '@reduxjs/toolkit';
import { site } from '../../../interfaces/site';


const initialState: site[] = [];

const slice = createSlice({
  name: 'siteDatas',
  initialState,
  reducers: {
    initSiteDatas: (_, action) => {
      return action.payload;
    },
    updateSiteDatas: (state, action) => {
      return [...state, ...action.payload];
    },
    resetSiteDatas: () => {
      return initialState;
    },
  },
});

export const {
  initSiteDatas,
  updateSiteDatas,
  resetSiteDatas,
} = slice.actions;

export default slice.reducer;
