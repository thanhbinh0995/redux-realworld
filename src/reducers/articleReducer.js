import * as types from "../constants/articles.constants";

export default function articleReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ARTICLES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
