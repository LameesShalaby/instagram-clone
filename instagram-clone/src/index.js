import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={'Loading...'} persistor={persistor}>
     <App />
    </PersistGate>
     </Provider>
  </React.StrictMode>
);
reportWebVitals();
