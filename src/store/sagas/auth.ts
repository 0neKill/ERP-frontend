import {call, put, takeEvery} from 'redux-saga/effects'

//Components
import {AUTH} from "../keys/auth";
import {Actions} from "../actions";
import {authorization, registration, request_confirm} from "../../utils/api/auth";
import {openNotificationError, openNotificationSuccess} from "../../utils/helpers";

//Types
import {AuthResponse} from "../../types/responses/auth";
import {Response} from "../../types/responses/general";
import {TActionsAuth} from "../../types/store/actions/actionAuth";


function* workerAuthentication({payload}: TActionsAuth.IActionAuthentication) {
    try {
        const data_response: Response.Data<string> = yield call(() => authorization(payload.data));
        if (data_response.status === 200) {
            yield openNotificationSuccess<string>(data_response);
            window.localStorage.setItem('Authorization', data_response.data.response.object);
            yield put(Actions.Authorization(true));
        }
    } catch (error) {
        yield openNotificationError<string>(error);
        yield payload.methods.setSubmitting(false);
        yield payload.methods.resetForm();
    }
}

function* workerRegistration({payload}: TActionsAuth.IActionRegistration) {
    try {
        const data_response: Response.Data<string> = yield call(() => registration(payload.data));
        if (data_response.status === 200) {
            yield openNotificationSuccess<string>(data_response);
            yield payload.methods.history.push('/sing_in');
        }
    } catch (error) {
        const data_response_error: Response.Data<AuthResponse.IResponseError> = error.response;
        yield openNotificationError(error);
        if (data_response_error.status === 401) {
            yield payload.methods.setFieldError(data_response_error.data.response.object.field, data_response_error.data.response.object.message);
        }
        yield payload.methods.setSubmitting(false);
    }
}

function* workerConfirm({payload}: TActionsAuth.IActionConfirm) {
    try {
        console.log(123123)
        const data_response: Response.Data<string> = yield call(() => request_confirm(payload.data));
        yield payload.methods(data_response.data.status, false);
    } catch (error) {
        const data_response_error: Response.Data<string> = error.response;
        console.log(data_response_error)
        yield payload.methods(data_response_error.data.status ? data_response_error.data.status : 'error', false);
    }

}

export default function* watcherAuth() {
    yield takeEvery(AUTH.AUTHENTICATION, workerAuthentication);
    yield takeEvery(AUTH.REGISTRATION, workerRegistration);
    yield takeEvery(AUTH.CONFIRM, workerConfirm);
}