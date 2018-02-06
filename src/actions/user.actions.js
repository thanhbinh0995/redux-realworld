import {userConstants} from "../constants";
import {userService} from "../services";
import {alertActions} from "./";
import {history} from "../helpers/history";
import axios from "axios";
import {authHeader} from "../helpers";
const API_ROOT = 'http://localhost:9000/api';

export const userActions = {
    login,
    logout,
    register,
    save,
    getCurrentUser,
    getAll
};
function login(user) {
    return dispatch => {
        dispatch(request({user}));
        userService.login(user)
            .then(data => {
                dispatch(loginSuccess(data));
                localStorage.setItem('user', JSON.stringify(data.data.data));
                history.push('/');
            })
            .catch(error => {
                dispatch(loginFailure(error.response.data));
                dispatch(alertActions.error("Username or password not correct"));
            });
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function loginSuccess(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function loginFailure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

function logout() {
    userService.logout();
    history.push('/login');
    return {type: userConstants.LOGOUT};
}

function register(user) {
    return dispatch => {
        dispatch(request({user}));
        userService.register(user)
            .then(user => {
                dispatch(success(user));
                history.push('/login');
                dispatch(alertActions.success('Registration successful'));
            })
            .catch(error => {
                dispatch(failure(error.response.data.errors));
                dispatch(alertActions.error(JSON.stringify(error.response.data.errors)));
            });
    };

    function request(user) {
        return {type: userConstants.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}

function save(user) {
    return async dispatch => {
        dispatch(request({user}));
        const requestOptions = {
            headers: {...authHeader(), 'Content-Type': 'application/json'},
        };
        const req = await axios.put(`${API_ROOT}/user`, {user}, requestOptions)
            .then(user => {
                dispatch(success(user));
                history.push('/');
                dispatch(alertActions.success('Update Profile Successful'));
            })
            .catch(error => {
                dispatch(failure("Update profile failure"));
                dispatch(alertActions.error("Update profile failure"));
            });
    };

    function request(user) {
        return {type: userConstants.UPDATE_USER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.UPDATE_USER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.UPDATE_USER_FAILURE, error}
    }
}

export function getCurrentUser() {
    return dispatch => {
        if (userService.current()) {
            userService.current()
                .then(request => {
                    dispatch(success(request.data.data));
                })
                .catch(error => {
                    dispatch(failure("Cannot get Current User"));
                });
        }
    };

    function success(user) {
        return {type: userConstants.GET_CURRENT_USER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.GET_CURRENT_USER_FAILURE, error}
    }
}


export function getAll() {
    return dispatch => {
        dispatch(request());
        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: userConstants.GETALL_REQUEST}
    }

    function success(users) {
        return {type: userConstants.GETALL_SUCCESS, users}
    }

    function failure(error) {
        return {type: userConstants.GETALL_FAILURE, error}
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
        return {type: userConstants.DELETE_REQUEST, id}
    }

    function success(id) {
        return {type: userConstants.DELETE_SUCCESS, id}
    }

    function failure(id, error) {
        return {type: userConstants.DELETE_FAILURE, id, error}
    }
}

