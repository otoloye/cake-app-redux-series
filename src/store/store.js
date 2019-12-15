import { createStore } from 'redux';
import { cakeReducer } from '../reducer/cakeReducer';

export const store = createStore(
  cakeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
