// test-utils.jsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import { BrowserRouter as Router } from 'react-router-dom';
import userReducer from '../redux/usersSlice';
import customerReducer from '../redux/customerSlice';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer:
       { user: userReducer, customers: customerReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Router>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
