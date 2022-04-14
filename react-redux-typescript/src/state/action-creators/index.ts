import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
    //replace `Dispatch: any` with the code below to tell TS to get a function only called with args that matches this type of action
    //therefore, when you give a non stirng[] to the dispatch payload, it shows error, so it's a way to check and make sure dispatching the correct action
    return async(dispatch: Dispatch<Action>) => { //manually dispatch actions directly into the redux store
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });
        //use a try-catch block to show success and error
        try {
        //where main logic goes
        //get data from api
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });
            //create a variable to map and store names
            const names = data.objects.map((result: any) => {
                    return result.package.name;
                });
            //use dispatch to bring in actions
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            });
        } 
        catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message,
            });
        }
    };
};