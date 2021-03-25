import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        toastOptions={{
          style: { fontFamily: 'sans', fontWeight: 600 },
          blank: {
            style: {
              backgroundColor: '#4E4B66',
              color: '#fff',
            },
          },
          success: {
            style: {
              backgroundColor: '#00BA88',
              color: '#fff',
            },
          },
          error: {
            style: {
              backgroundColor: '#C30052',
              color: '#fff',
            },
          },
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
