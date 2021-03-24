import {IDataPayloadSingIn, IFormValuesSingIn} from "../../types/layouts/auth/sing_in";
import {AUTH} from "../keys/auth";
import {TActionsAuth} from "../../types/store/actions/actionAuth";
import {IDataPayloadSingUp} from "../../types/layouts/auth/sing_up";
import {AuthValues} from "../../types/layouts/auth/general";
import {TStatusResponseOpenNotification} from "../../types/utils/general";

export const Authentication = (data: IFormValuesSingIn, methods: IDataPayloadSingIn): TActionsAuth.All => {
    return ({
        type: AUTH.AUTHENTICATION,
        payload: {
            data: data,
            methods: methods
        }
    })
}

export const Registration = (data: AuthValues & { user_name: string, repeat_password: string }, methods: IDataPayloadSingUp): TActionsAuth.All => {
    return ({
        type: AUTH.REGISTRATION,
        payload: {
            data: data,
            methods: methods
        }
    })
}

export const Confirm = (data: string, callback: (status: TStatusResponseOpenNotification, loading: boolean) => void): TActionsAuth.All => {
    return ({
        type: AUTH.CONFIRM,
        payload: {
            data: data,
            methods: callback
        }
    })
}
