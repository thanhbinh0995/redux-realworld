import * as types from "../constants/articles.constants";
import axios from "axios";
import {alertActions} from "./";
import {history} from "../helpers/history";
const API_ROOT = 'https://conduit.productionready.io/api';
import { withRouter } from "react-router-dom";
import { authHeader } from "../helpers";

const user = JSON.parse(localStorage.getItem('user'));
let token = user ? user.token : null;

export function loadArticles() {
  return (dispatch) => {
    const url = `${API_ROOT}/articles?limit=10`;
    return axios.get(url)
        .then(request => {
          dispatch(loadArticlesSuccess(request.data.articles));
        }).catch(error => {
          dispatch(loadArticlesError(error));
        });
  }
}

export function loadArticlesSuccess(articles) {
  return {
    type: types.LOAD_ARTICLES_SUCCESS,
    payload: articles
  };
}

export function loadArticlesError(error) {
  return {
    type: types.LOAD_ARTICLES_ERROR,
    payload: error
  };
}

export function loadArticlesByUser(user) {
  const url = `${API_ROOT}/articles?author=${user}`;
  const request = axios.get(url);
}

export function createArticle(article) {
  return dispatch => {
    dispatch(request({article}));
    const requestOptions = {
      method: 'POST',
      headers: {
          ...authHeader(),
        'Content-Type': 'application/json',
      },
    };
    return axios.post(`${API_ROOT}/articles`, {article}, requestOptions)
        .then(request => {
          dispatch(createArticleSuccess(request.data.article));
          history.push('/');
          dispatch(alertActions.success('Create Post Completed'));
        }).catch(error => {
          dispatch(createArticleError("Create Post Failure"));
          dispatch(alertActions.error("Create Post Failure"));
        });
  };
  function request(article) {
    return {type: types.REQUEST_CREATE_ARTICLE, article}
  }

  function createArticleSuccess(article) {
    return {
      type: types.CREATE_ARTICLE_SUCCESS,
      payload: article
    };
  }

  function createArticleError(error) {
    return {
      type: types.CREATE_ARTICLES_ERROR,
      payload: error
    };
  }
}

export function getArticle(slug) {
  return (dispatch) => {
    const url = `${API_ROOT}/articles/${slug}`;
    return axios.get(url)
        .then(request => {
          dispatch(getArticleSuccess(request.data.article));
        }).catch(error => {
          dispatch(getArticleError(error));
        });
  }
}

export function getArticleSuccess(article) {
  return {
    type: types.GET_ARTICLE_SUCCESS,
    payload: article
  };
}

export function getArticleError(error) {
  return {
    type: types.GET_ARTICLE_ERROR,
    payload: error
  };
}

