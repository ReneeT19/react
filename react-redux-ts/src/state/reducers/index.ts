import { combineReducers } from 'redux'
import bankReducer from './bankReducer'

const reducers = combineReducers({
    bank: bankReducer
});

export default reducers;

//assign the type of reducers to State so App.ts can recognize state and add this export to the entry point index.ts
export type State = ReturnType<typeof reducers>