import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { jss, JssProvider } from 'react-jss'
import vendorPrefixer from 'jss-vendor-prefixer'
import jssNested from 'jss-nested'
import store from './store/install'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

jss.use(vendorPrefixer())
jss.use(jssNested())

ReactDOM.render(
  <Provider store={store}>
    <JssProvider jss={jss}>
      <App />
    </JssProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
