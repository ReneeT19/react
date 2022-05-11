
const initialState = 0;

interface DepositAction {
    
}

const reducer = (state: number = initialState, action: Action) => {
    switch(action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        case "bankrupt":
            return 0;
        default:
            return state;
    }
}

export default reducer;