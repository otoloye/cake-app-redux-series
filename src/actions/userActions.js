import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_REQUEST_SUCCESS,
  FETCH_USERS_REQUEST_FAILURE
} from './actionTypes';
import Axios from 'axios';

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUserRequestSuccess = users => {
  return {
    type: FETCH_USERS_REQUEST_SUCCESS,
    payload: users
  };
};

export const fetchUserRequestFailure = error => {
  return {
    type: FETCH_USERS_REQUEST_FAILURE,
    payload: error
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUserRequest);
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data;
        dispatch(fetchUserRequestSuccess(users));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUserRequestFailure(errorMsg));
      });
  };
};
