import { createSlice } from '@reduxjs/toolkit';
import { topContent } from '../../../interfaces/state';


const initialState: topContent = 'top';

const slice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    updateContent: (_, action) => {
      return action.payload;
    },
  },
});


export const {
  updateContent,
} = slice.actions;

export default slice.reducer;
