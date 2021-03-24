import {GENERAL} from "../../../store/keys/general";

export namespace TActionsGeneral {
    interface IActionAuthorization {
        type: typeof GENERAL.AUTHORIZATION,
        payload: boolean,
    }



    export type All = IActionAuthorization;
}

