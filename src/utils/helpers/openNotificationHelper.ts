import {Response} from "../../types/responses/general";
import openNotification from "../openNotification";

export function* openNotificationSuccess<T>(data_response: Response.Data<T>) {
    yield openNotification({
        status: data_response.data.status,
        message: data_response.data.status.toUpperCase(),
        description: data_response.data.response.message,
        duration: 1.4,
        durationRedirect: 2000,
    });
}

export function* openNotificationError<T>(error: any, duration: number = 2, durationRedirect: number = 0) {
    const data_response_error: Response.Data<T> = error.response;
    yield openNotification({
        status: data_response_error.data.status ? data_response_error.data.status : 'error',
        message: data_response_error.data.status ? data_response_error.data.status.toUpperCase() : 'error'.toUpperCase(),
        description: data_response_error.data.response ? data_response_error.data.response.message : data_response_error.statusText,
        duration: duration,
        durationRedirect: durationRedirect,
    });
}