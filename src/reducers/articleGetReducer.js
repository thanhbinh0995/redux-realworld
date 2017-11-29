import * as types from "../constants/articles.constants";

export default function articleGetReducer(state = [], action) {
  switch (action.type) {
    case types.GET_ARTICLE_SUCCESS:
      return action.payload;
    case types.GET_ARTICLE_ERROR:
      return {};
    default:
      return state;
  }
}
