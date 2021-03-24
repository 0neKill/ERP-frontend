import {TStatusResponseOpenNotification} from "../utils/general";
import {AxiosResponse} from "axios";

export namespace Response {
    export type Data<T> = AxiosResponse<{
        status: TStatusResponseOpenNotification,
        response: {
            message: string,
            object: T,
        },
    }>
}