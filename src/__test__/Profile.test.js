import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Profile from '../components/profile/Profile';

describe('Profile component', () => {
  it('Rendered Profile Page', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Profile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
