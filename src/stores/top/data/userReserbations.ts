import { createSlice } from '@reduxjs/toolkit';
import { reservation } from '../../../interfaces/reservation';


const initialState: reservation[] = [];

const slice = createSlice({
  name: 'UserReservations',
  initialState,
  reducers: {
    initUserReservations: (_, action) => {
      return action.payload;
    },
    updateUserReservations: (state, action) => {
      return [...state, ...action.payload];
    },
    resetUserReservations: () => {
      return initialState;
    },
  },
});

export const {
  initUserReservations,
  updateUserReservations,
  resetUserReservations,
} = slice.actions;

export default slice.reducer;
