import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets/Rockets';

describe('RocketsList component', () => {
  it('Rendered RocketsList component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Rockets />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
