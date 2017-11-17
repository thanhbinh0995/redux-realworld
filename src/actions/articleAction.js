import * as types from "./actionTypes";
import axios from "axios";

const ROOT_URL = 'https://conduit.productionready.io/api';
const url = `${ROOT_URL}/articles?limit=10`;
const request = axios.get(url);

export function loadArticlesSuccess(articles) {
  return {type: types.LOAD_ARTICLES_SUCCESS, articles};
}

export function loadArticles() {
  return function (dispatch) {
    return request.then(request => {
      dispatch(loadArticlesSuccess(request.data.articles));
    }).catch(error => {
      throw(error);
    });
  };
}
