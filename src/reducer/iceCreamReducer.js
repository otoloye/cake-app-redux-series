import { BUY_ICE_CREAM } from '../actions/actionTypes';
import { initialState } from './initialState';

export const iceCreamReducer = (state = initialState.iceCream, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return { ...state, numberOfIceCream: state.numberOfIceCream - 1 };
    default: {
      return state;
    }
  }
};
