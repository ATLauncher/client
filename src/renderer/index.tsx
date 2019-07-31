import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';

import './app.global.css';

const store = configureStore();

ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'));
