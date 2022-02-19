import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import siteDatas from './top/data/siteDatas';
import user from './top/data/user';
import userReservations from './top/data/userReserbations';

const reducer = combineReducers({
  siteDatas,
  user,
  userReservations
});


const store = configureStore({ reducer });
export default store;
