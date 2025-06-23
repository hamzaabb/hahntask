import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login'; 
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Login Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      Account: { user: null },
      Login: { error: null, loading: false, errorMsg: null },
    });
  });

  test('renders login form inputs', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  test('validates empty form submission', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    expect(screen.getByText(/Please Enter Your Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Please Enter Your Password/i)).toBeInTheDocument();
  });
});
