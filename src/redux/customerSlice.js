import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'customer',
  initialState: {
    data: ['teste', 'teste2'],
  },

  reducers: {
    addCustomer: (state, action) => {
      [...state.data, action.payload];
    },
  },
});

export const { addCustomer } = counterSlice.actions;

export default counterSlice.reducer;
