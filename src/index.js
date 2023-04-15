import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from 'react-redux';
import {persistor,store} from '../src/redux/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store ={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
            <App />
       </PersistGate>
       </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


