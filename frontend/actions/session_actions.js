import { postUser, postSession, deleteSession } from "../util/session";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveSessionErrors = (errors = []) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = (formUser) => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = (formUser) => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));
