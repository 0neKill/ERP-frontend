import {AuthFieldValue} from "../../layouts/auth/general";

export namespace AuthResponse {
    export interface IResponseError {
        field: AuthFieldValue,
        message: string,
    }
}