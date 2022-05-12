import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const depositMoney = (amount: number) => {
    //import <Action> so TS knows the correct type of payload (for example, string will show error)
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}