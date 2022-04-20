import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import customerReducer from './customerSlice';

export default configureStore({
  reducer: {
    customers: customerReducer,
    users: usersReducer,
  },
});
