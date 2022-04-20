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

export const deleteCustomer = createAsyncThunk(
  'deleteCustomer',
  async (id) => {
    const url = `https://625f410a873d6798e2b4810f.mockapi.io/zitrus/${id}`;
    const { data } = await axios.delete(url);
    return data;
  },
);

export const getCustomerById = createAsyncThunk(
  'getCustomerById',
  async (id) => {
    const url = `https://625f410a873d6798e2b4810f.mockapi.io/zitrus/${id}`;
    const { data } = await axios.get(url);
    return data;
  },
);

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    data: [],
    lastUser: {},
  },

  extraReducers: {
    [getCustomer.fulfilled]: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.data = payload;
    },
    [postCustomer.fulfilled]: (state, { payload }) => {
      state.data.push(payload);
    },
    [deleteCustomer.fulfilled]: (state, { payload }) => {
      const newData = state.data.filter((item) => item.id !== payload.id);
      // eslint-disable-next-line no-param-reassign
      state.data = newData;
    },
    [getCustomerById.fulfilled]: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.lastUser = payload;
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
