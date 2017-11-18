import * as types from "./actionTypes";
import axios from "axios";

const ROOT_URL = 'https://conduit.productionready.io/api';

export function loadArticles() {  
  return (dispatch) => {
    const url = `${ROOT_URL}/articles?limit=10`;
    const request = axios.get(url);
    return request.then(request => {
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
  const url = `${ROOT_URL}/articles?author=thanhbinh`;
  const request = axios.get(url);
  
}

