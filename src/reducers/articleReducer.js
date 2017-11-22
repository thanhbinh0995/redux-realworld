import * as types from "../constants/articles.constants";

export default function articleReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      return action.payload;
    case types.LOAD_ARTICLES_ERROR:
      return {};
    case types.CREATE_ARTICLE_SUCCESS:
      // return [...state, action.payload];
    case types.CREATE_ARTICLES_ERROR:
      return {};
    default:
      return state;
  }
}
