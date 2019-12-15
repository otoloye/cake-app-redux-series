import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_REQUEST_SUCCESS,
  FETCH_USERS_REQUEST_FAILURE
} from '../actions/actionTypes';

const initialState = {
  loading: true,
  users: [],
  error: ''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        loading: true
      };
    }
    case FETCH_USERS_REQUEST_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: ''
      };
    }

    case FETCH_USERS_REQUEST_FAILURE: {
      return {
        loading: false,
        users: [],
        error: action.payload
      };
    }

    default:
      return state;
  }
};
