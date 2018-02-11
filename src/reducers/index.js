import {combineReducers} from "redux";

import {authentication} from "./authentication.reducer";
import {registration} from "./registration.reducer";
import {users} from "./users.reducer";
import {alert} from "./alert.reducer";
import articles from "./articleReducer";
import article from "./articleGetReducer";
import chat from "./chatReducer";
const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    articles,
    article,
    chat,
});

export default rootReducer;