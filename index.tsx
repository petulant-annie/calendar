import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './src/store';
import Main from './src/containers/main/main';

const main = (
  <Provider store={store}>
    <Main />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
