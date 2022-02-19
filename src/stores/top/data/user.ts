import { createSlice } from '@reduxjs/toolkit';
import { user } from '../../../interfaces/user';


const initialState: user = {
  userId: undefined,
  userName: undefined,
  userTel: undefined,
  userPassword: undefined,
  userMail: undefined,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUser: (_, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      return {...state, ...action.payload};
    },
    resetUser: () => {
      return initialState;
    },
  },
});

export const {
  initUser,
  updateUser,
  resetUser,
} = slice.actions;

export default slice.reducer;
