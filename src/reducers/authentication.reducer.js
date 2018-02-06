import {userConstants} from "../constants";

export function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    case userConstants.GET_CURRENT_USER_SUCCESS:
      return {...state, currentUser: action.user};
    case userConstants.GET_CURRENT_USER_FAILURE:
      return {};
    default:
      return state
  }
}