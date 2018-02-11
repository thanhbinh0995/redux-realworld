import {authHeader} from "../helpers";
import axios from "axios";
const API_ROOT = 'http://localhost:9000/api';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
    current,
    getGroupsByUser,
    getMessagesByGroup,
};

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
    };
    return axios.post(`${API_ROOT}/users/register`, {
        username: user.username,
        password: user.password,
        email: user.email
    }, requestOptions);
}

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
    };
    return axios.post(`${API_ROOT}/users/login`, {username: user.username, password: user.password}, requestOptions);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function current() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader()
        },
    };
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
        return axios.get(`${API_ROOT}/users/${user.id}`, requestOptions);
    } else {
        return null;
    }
}

function getGroupsByUser() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader()
        },
    };
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user && user.id) {
        return axios.get(`${API_ROOT}/groups/${user.id}`, requestOptions);
    } else {
        return null;
    }
}

function getMessagesByGroup(groupId) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authHeader()
        },
    };
    return axios.get(`${API_ROOT}/message/${groupId}`, requestOptions);
}

function getAll() {
    const user = JSON.parse(localStorage.getItem('user'));
    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': authHeader()},
    };
    return axios.get(`${API_ROOT}/users/index?sex=${user.sex}`, requestOptions);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users/' + id, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch('/users/' + user.id, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('/users/' + id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}