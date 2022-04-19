import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCustomer = createAsyncThunk(
  'getCustomer',
  async () => {
    const fetch = await axios.get('https://625ca4b54c36c75357687926.mockapi.io/user');
    const { data } = fetch;
    console.log(data);
    return data;
  },
);

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    data: [],
    isLoading: false,
  },

  extraReducers: {
    [getCustomer.fulfilled]: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.data = payload.data;
    },
  },

  reducers: {
    updateState: (state, { payload }) => {
      state.data.push(payload);
    },
  },
});

export const { updateState } = customerSlice.actions;

export default customerSlice.reducer;
