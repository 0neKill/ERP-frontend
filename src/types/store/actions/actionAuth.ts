import {AUTH} from "../../../store/keys/auth";
import {IDataPayloadSingIn, IFormValuesSingIn} from "../../layouts/auth/sing_in";
import {IDataPayloadSingUp} from "../../layouts/auth/sing_up";
import {AuthValues} from "../../layouts/auth/general";
import {TStatusResponseOpenNotification} from "../../utils/general";


export namespace TActionsAuth {
    export interface IActionAuthentication {
        type: typeof AUTH.AUTHENTICATION,
        payload: {
            methods: IDataPayloadSingIn,
            data: IFormValuesSingIn
        },
    }

    export interface IActionRegistration {
        type: typeof AUTH.REGISTRATION,
        payload: {
            methods: IDataPayloadSingUp,
            data: AuthValues
        },
    }

    export interface IActionConfirm {
        type: typeof AUTH.CONFIRM,
        payload: {
            data:string,
            methods: (status: TStatusResponseOpenNotification, loading: boolean) => void,
        }
    }


    export type All = IActionAuthentication | IActionRegistration | IActionConfirm;
}



