import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCustomer = createAsyncThunk(
  'getCustomer',
  async () => {
    const fetch = await axios.get('https://625f410a873d6798e2b4810f.mockapi.io/zitrus');
    const { data } = fetch;
    return data;
  },
);

export const postCustomer = createAsyncThunk(
  'postCustomer',
  async (customer) => {
    const url = 'https://625f410a873d6798e2b4810f.mockapi.io/zitrus';
    const { data } = await axios.post(url, customer);
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
      state.data = payload;
    },
    [postCustomer.fulfilled]: (state, { payload }) => {
      state.data.push(payload);
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
