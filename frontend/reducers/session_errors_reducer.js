import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

export default (state = [], action) => {

    Object.freeze(state);

    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:    
        return Object.assign({}, { session: action.errors });
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, { session: [] });
    default:
        return state;
    }
};