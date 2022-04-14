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
interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

//to further improve the code, create a type for Action instead of passing the long code inside reducer
type Action = 
SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

//to further improve the code, use Enum instead of passing the long string to switch function and interfaces too
enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

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