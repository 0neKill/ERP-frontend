import React, {ChangeEvent} from 'react';
import {Form, Input} from "antd";
import {FormikErrors, FormikTouched} from "formik";

//Components
import {createMessage, validateStatus} from "../../utils/helpers";

//Types
import {IFormValuesSingIn} from "../../types/layouts/auth/sing_in";
import {AuthFieldValue, AuthValues} from "../../types/layouts/auth/general";


interface IFormItem {
    _id: AuthFieldValue,
    placeholder: string,
    values: IFormValuesSingIn & { user_name?: string, repeat_password?: string },
    errors: FormikErrors<AuthValues>
    touched: FormikTouched<AuthValues>
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
    handleChange: (event: ChangeEvent) => void
}

export const FormItem: React.FunctionComponent<IFormItem> = React.memo(({
                                                                            _id,
                                                                            placeholder,
                                                                            values,
                                                                            handleBlur,
                                                                            handleChange,
                                                                            touched,
                                                                            errors,
                                                                        }) => {
    return (
        <Form.Item
            hasFeedback
            validateStatus={validateStatus(_id, touched, errors)}
            help={createMessage(_id, touched, errors)}
        >
            <Input
                id={_id}
                className='auth__form-input'
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[_id]}
            />
        </Form.Item>
    )
})