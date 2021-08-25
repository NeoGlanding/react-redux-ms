import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReduxComp from './redux';

import {Provider} from 'react-redux';
import store from './storage/reduxStore'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxComp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);