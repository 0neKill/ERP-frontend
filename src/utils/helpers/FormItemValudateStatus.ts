import {FormikErrors, FormikTouched} from "formik";
import {AuthFieldValue, AuthValues} from "../../types/layouts/auth/general";

type TValidateStatus = 'success' | 'error' | undefined;


export default function validateStatus(
    _id: AuthFieldValue,
    touched: FormikTouched<AuthValues>,
    errors: FormikErrors<AuthValues>): TValidateStatus {
    if (touched[_id]) {
        return errors[_id] ? 'error' : 'success';
    }
    return undefined;
}