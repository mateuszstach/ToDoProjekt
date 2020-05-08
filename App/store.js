import AsyncStorage from '@react-native-community/async-storage';
import appReducers from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let persistsedReducer = persistReducer(persistConfig, appReducers);

export const store = createStore(persistsedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
