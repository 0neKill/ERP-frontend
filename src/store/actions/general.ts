import {TActionsGeneral} from "../../types/store/actions/actionGeneral";
import {GENERAL} from "../keys/general";


export const Authorization = (authorization: boolean): TActionsGeneral.All => ({
    type: GENERAL.AUTHORIZATION,
    payload: authorization
});

