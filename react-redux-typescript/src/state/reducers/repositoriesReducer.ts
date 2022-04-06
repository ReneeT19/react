//define an interface that explains the arguments
interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]; //api data
}

const reducer = (state: RepositoriesState, action: any) => {
//usually use switch statement within reducer
    switch(action.type) {
        //different cases are different action types defined in the design
        case 'search_repositories':
            return { loading: true, error: null, data: []} //new search so data is empty array
        case 'search_repositories_success':
            return { loading: false, error: null, data: action.payload }; //action.payload is the repos found from search
        case 'search_repositories_error':
            return { loading: false, error: action.payload, data: []}; //action.payload is the error message from api; reset data to empty array
        default: 
            return state; 
    }
};

export default reducer;