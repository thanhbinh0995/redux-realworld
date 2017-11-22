import * as types from "../constants/articles.constants";
import axios from "axios";
import { alertActions } from "./";
import { history } from "../helpers/history";
const API_ROOT = 'https://conduit.productionready.io/api';

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
  const url = `${API_ROOT}/articles?author=thanhbinh`;
  const request = axios.get(url);
}

export function createArticle(article) {
  return dispatch => {
    dispatch(request({ article }));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    console.log(article);
    return axios.post(`${API_ROOT}/articles`, { article }, requestOptions)
      .then(request => {
        dispatch(createArticleSuccess(request.data.article));
        history.push('/');
        dispatch(alertActions.success('Create Post Completed'));
      }).catch(error => {
        dispatch(createArticleError("Create Post Failure"));
        dispatch(alertActions.error("Create Post Failure"));
      });
  }
  function request(article) {
    return { type: types.REQUEST_CREATE_ARTICLE, article }
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