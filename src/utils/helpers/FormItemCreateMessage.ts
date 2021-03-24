import {FormikErrors, FormikTouched} from "formik";
import {AuthFieldValue, AuthValues} from "../../types/layouts/auth/general";

export default function createMessage(_id: AuthFieldValue,
                                      touched: FormikTouched<AuthValues>,
                                      errors: FormikErrors<AuthValues>): string | undefined {
    if (touched[_id]) {
        return errors[_id];
    }
    return undefined
}