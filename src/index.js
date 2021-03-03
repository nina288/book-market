import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './store';
import 'semantic-ui-css/semantic.min.css'

//ReactDOM.render( <App />, document.getElementById('root'));

import { Provider } from 'react-redux';
import './app.css';
import App from './containers/App';

//import 'semantic-ui-css/semantic.min.css';





const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
