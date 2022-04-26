import { ActionType } from "../action-types";

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
export type Action = 
SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;