
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import authReducer from './authReducer/auth.reducers';
import tokenReducer from './tokenReducer/token.reducers';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['somethingTemporary']
}

// const authPersistConfig = {
//   key: 'auth',
//   storage: storage,
//   blacklist: ['somethingTemporary']
// }

const rootReducer = combineReducers({
  // auth: persistReducer(authPersistConfig, authReducer),
  token: tokenReducer
})

export const combinedReducers = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof combinedReducers>