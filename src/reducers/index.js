import {combineReducers} from "redux";

import {authentication} from "./authentication.reducer";
import {registration} from "./registration.reducer";
import {users} from "./users.reducer";
import {alert} from "./alert.reducer";
import articles from "./articleReducer";
import article from "./articleGetReducer";
const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  articles,
  article,
});

export default rootReducer;