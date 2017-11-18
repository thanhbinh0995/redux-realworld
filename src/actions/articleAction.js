import * as types from "./actionTypes";
import axios from "axios";

const ROOT_URL = 'https://conduit.productionready.io/api';


export function loadArticlesSuccess(articles) {
  return {type: types.LOAD_ARTICLES_SUCCESS, articles};
}

export function loadArticlesByUser(user) {
  const url = `${ROOT_URL}/articles?author=thanhbinh`;
  const request = axios.get(url);

}

export function loadArticles() {
  const url = `${ROOT_URL}/articles?limit=10`;
  const request = axios.get(url);
  return function (dispatch) {
    return request.then(request => {
      dispatch(loadArticlesSuccess(request.data.articles));
    }).catch(error => {
      throw(error);
    });
  };
}
