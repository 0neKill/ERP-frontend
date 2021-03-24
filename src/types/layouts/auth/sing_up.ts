import {History} from 'history';

export interface IFormValuesSingUp {
    user_name: string,
    repeat_password: string,
}
export interface IFormValuesValidateSingUp {
    user_name: (key: string) => void,
    repeat_password: (key: string) => void,
}

export interface IDataPayloadSingUp {
    setSubmitting: (isSubmitting: boolean) => void,
    setFieldError: (field: string, message: string | undefined) => void,
    history: History
}