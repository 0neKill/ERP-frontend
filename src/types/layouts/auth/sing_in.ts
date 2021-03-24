import {FormikState} from "formik/dist/types";

export interface IFormValuesSingIn {
    email: string,
    password: string,
}

export interface IFormValuesValidateSingIn {
    email: (key: string) => void,
    password: (key: string) => void,
}

export interface IDataPayloadSingIn {
    resetForm: (nextState?: Partial<FormikState<IFormValuesSingIn>>) => void,
    setSubmitting: (isSubmitting: boolean) => void,
}