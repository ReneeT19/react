import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

//combine reducers to use in store
//state inside redux store is an object that has a respository key and a property from the repositoryReducer
//below is a function that call reducers that give us objects that have the strucutre like this below
const reducers = combineReducers({
    repositories: repositoriesReducer,
});

export default reducers;

//use built-in helper inside redux saying take this function reducers and give us the type whatever that function returns
//and assign it to RootState
export type RootState = ReturnType<typeof reducers>;
