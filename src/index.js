import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from "./state/index.js"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"; //it is so to save all the state. //all of this will be stored in local state, anytime the user close the browser or the tab, the info will still be there. So the user info will still be there. The only to get rid of it to clear their catch   
import storage from "redux-persist/lib/storage"
import { PersistGate } from "redux-persist/integration/react"
const persistConfig = {
  key: 'root',
  storage,
  level: 1
} // this when we resignin
const persistedReducer = persistReducer(persistConfig, authReducer)
let store = configureStore({
  reducer: authReducer,
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER]
    }
  })
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


