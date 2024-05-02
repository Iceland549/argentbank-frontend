// store.js

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice"; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const initialState = {
  user: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    userName: '',
    isAuthenticated: false,
    token: '', 
  },
};

const userPersistConfig = {
  key: 'user',
  storage: storage,
  whitelist: [ 'isAuthenticated', 'isLogged', 'token', 'userName', 'firstName', 'lastName'],
};

const persistedUserReducer = persistReducer(userPersistConfig, userSlice.reducer);

const rootReducer = combineReducers({
  user: persistedUserReducer,
});


const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

const persistor = persistStore(store);

export { store, persistor };
