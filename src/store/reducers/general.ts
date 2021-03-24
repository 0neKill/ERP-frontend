import {TReducerGeneral} from "../../types/store/reducers/reducerGeneral";
import {TActionsGeneral} from "../../types/store/actions/actionGeneral";
import {GENERAL} from "../keys/general";

const initialState: TReducerGeneral.IInitialState = {
    auth: !!window.localStorage.getItem('Authorization'),
    platform: null,
}

export default function generalReducer(state: TReducerGeneral.IInitialState = initialState, action: TActionsGeneral.All)
    : TReducerGeneral.IInitialState {
    switch (action.type) {
        case GENERAL.AUTHORIZATION: {
            return {
                ...state,
                auth: action.payload
            }
        }
        default: {
            return state;
        }
    }
}