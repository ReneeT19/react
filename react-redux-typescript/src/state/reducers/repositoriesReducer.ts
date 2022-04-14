import { ActionType } from "../action-types";
import { Action } from "../actions";
//reconstructred

//define an interface that explains the arguments
interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]; //api data
}

//replace `action: any` with interface; action is an object that must have a type property and optionally a payload
// interface Action {
//     type: string;
//     payload?: any; //optional
// }

//comment out the code above and seperate interfaces for action based on the design
//replace `action: Action` with the separate interfaces created
//the comments above refer to the code in index.ts under actions folder


//pass interface annotation to the reducer - using TS to check value type (for example, data has to be string[] after adding the annotation)
const reducer = 
    (state: RepositoriesState, 
    action: Action): 
    RepositoriesState => {
//usually use switch statement within reducer
    switch(action.type) { //if typing 'action.tes' TS will show error because the interface defined only has type, same as payload below
        //different cases are different action types defined in the design
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: []} //new search so data is empty array
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload }; //action.payload is the repos found from search
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: []}; //action.payload is the error message from api; reset data to empty array
        default: 
            return state; 
    }
};

export default reducer;