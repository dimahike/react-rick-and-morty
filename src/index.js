import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reducer/store.js';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

ReactDOM.render(
  <BrowserRouter>
    <ScopedCssBaseline>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>{' '}
      </Provider>
    </ScopedCssBaseline>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
