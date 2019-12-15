import { combineReducers } from 'redux';
import { cakeReducer } from './cakeReducer';
import { iceCreamReducer } from './iceCreamReducer';

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});
