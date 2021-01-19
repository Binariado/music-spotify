
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tokenReducer from './tokenReducer/token.reducers';
import musicReducer from './musicReducer/music.reducers';
import errorReducer from './errorReducer/error.reducers';
import playerReducer from './playerReducer/player.reducers';
// 
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['somethingTemporary']
}

const rootReducer = combineReducers({
  token: tokenReducer,
  music: musicReducer,
  error: errorReducer,
  player: playerReducer,
})

export const combinedReducers = persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof combinedReducers>