import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import home from './reducers/home';
import pokemondetails from './reducers/pokemondetails';

let store = null;
const rootReducer = combineReducers({
  home: home,
  pokemondetails: pokemondetails,
});

export function configureStore() {
  store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}

export function getStore() {
  return store;
}