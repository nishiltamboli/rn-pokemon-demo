import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import home from './reducers/home';

let store = null;
const rootReducer = combineReducers({
  home: home,
});

export function configureStore() {
  store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}

export function getStore() {
  return store;
}