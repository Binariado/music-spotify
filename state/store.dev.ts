import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combinedReducers } from './reducers';

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk))
)
export const persistor = persistStore(store);

 const configureStore =  {
  store,
  persistor
}

export default configureStore
