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

export const putCustomer = createAsyncThunk(
  'putCustomer',
  async (user) => {
    const url = `https://625f410a873d6798e2b4810f.mockapi.io/zitrus/${user.id}`;
    const { data } = await axios.put(url, user);
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
      state.data = payload;
    },
    [postCustomer.fulfilled]: (state, { payload }) => {
      state.data.push(payload);
    },
    [deleteCustomer.fulfilled]: (state, { payload }) => {
      const newData = state.data.filter((item) => item.id !== payload.id);
      state.data = newData;
    },
    [getCustomerById.fulfilled]: (state, { payload }) => {
      state.lastUser = payload;
    },
    [putCustomer.fulfilled]: (state, { payload }) => {
      const client = state.data.findIndex((customer) => customer.id === payload.id);
      state.data[client] = payload;
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

// criar 2 estados, 1 para o array filtrado, outro para a palavra q vai filtrar
// quando fizer as requisições dos clientes,
// fazer um useffect para filtrar o array original de acordo com a palavra,
// depois setar o array filtrado com o valor
