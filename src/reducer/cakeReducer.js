import { BUY_CAKE } from '../actions/actionTypes';
import { initialState } from './initialState';

export const cakeReducer = (state = initialState.cake, action) => {
  switch (action.type) {
    case BUY_CAKE: // if (state.numberOfCakes > 0) {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload
        // };
        // } else {
        // return state;
      };
    default: {
      return state;
    }
  }
};
