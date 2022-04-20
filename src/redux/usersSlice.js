import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
  'getUsers',
  async () => {
    const fetch = await axios.get('https://625f410a873d6798e2b4810f.mockapi.io/users');
    const { data } = fetch;
    return data;
  },
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },

  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      let { data } = state;
      data = payload;
      return data;
    },
  },
});

export default usersSlice.reducer;
