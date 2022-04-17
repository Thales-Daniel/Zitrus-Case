import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCustomer = createAsyncThunk(
  'getCustomer',
  async () => {
    const fetch = await axios.get('api/customers');
    const { data: { customers } } = fetch;
    return customers;
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
      state.data = payload;
    },
  },
});

export default customerSlice.reducer;
