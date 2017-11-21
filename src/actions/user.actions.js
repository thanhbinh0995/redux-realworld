import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";
import axios from 'axios';
import {withRouter} from "react-router-dom";
const API_ROOT = 'https://conduit.productionready.io/api';

export const userActions = {
  login,
  logout
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));
    userService.login(email, password)
      .then( user => {
        dispatch(loginSuccess(user));
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/');
        // this.props.history.push("/");
      })
      .catch(error => {
        dispatch(loginFailure(error.response.data));
        dispatch(alertActions.error("Email or password not correct"));
      });
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }

  function loginSuccess(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }

  function loginFailure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    axios({
      method: 'post',
      url: "https://api.stormpath.com/v1/tenants/current",
      auth: {
        email: 'thanhbinh@gmail.com',
        password: 'thanhbinh',
      },
    }).then(function (response) { console.log(response) })

    // userService.register(user)
    //   .then(
    //   user => {
    //     dispatch(success());
    //     history.push('/login');
    //     dispatch(alertActions.success('Registration successful'));
    //   },
    //   error => {
    //     dispatch(failure(error));
    //     dispatch(alertActions.error(error));
    //   }
    //   );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user }
  }

  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user }
  }

  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error }
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
      users => dispatch(success(users)),
      error => dispatch(failure(error))
      );
  };

  function request() {
    return { type: userConstants.GETALL_REQUEST }
  }

  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users }
  }

  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error }
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id)
      .then(
      user => {
        dispatch(success(id));
      },
      error => {
        dispatch(failure(id, error));
      }
      );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id }
  }

  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id }
  }

  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error }
  }
}