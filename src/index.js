import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import './js-css/main.css';

import App from './containers/app';

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
  );
