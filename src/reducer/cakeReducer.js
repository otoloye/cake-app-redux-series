import { BUY_CAKE } from '../actions/actionTypes';
import { initialState } from './initialState';

export const cakeReducer = (state = initialState.cake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default: {
      return state;
    }
  }
};
