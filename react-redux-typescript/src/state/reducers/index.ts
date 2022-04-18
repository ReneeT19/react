import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

//combine reducers to use in store
const reducers = combineReducers({
    repositories: repositoriesReducer,
});

export default reducers;