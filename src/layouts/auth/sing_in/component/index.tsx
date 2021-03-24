import React from 'react';
import {Form} from "antd";
import {FormikProps} from "formik";

import {Block, Button, FormItem} from "../../../../components";
import {IFormValuesSingIn} from "../../../../types/layouts/auth/sing_in";
import { Link } from 'react-router-dom';

export const SingIn: React.FunctionComponent<FormikProps<IFormValuesSingIn>> = React.memo(
    ({
         values,
         errors,
         touched,
         isSubmitting,
         handleSubmit,
         handleChange,
         handleBlur
     }): React.ReactElement => {
        return <Block title='Войти в аккаунт' subtitle='Пожалуйста, войдите в свой аккаунт' className='auth__block'>
            <Form
                className="auth__form"
                onSubmitCapture={handleSubmit}
            >
                <FormItem
                    _id='email'
                    placeholder='Логин'
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                />
                <FormItem
                    _id='password'
                    placeholder='Пароль'
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                />

                <Form.Item
                    className='auth__form-footer'
                >
                    <Button className='btn__auth' type="primary" block size='large' loading={isSubmitting}
                            htmlType="submit"
                            disabled={isSubmitting}>
                        ВОЙТИ В АККАУНТ
                    </Button>
                </Form.Item>
                <Link to='/sing_up' className="auth__form-link"><span>Зарегистрироваться</span></Link>
            </Form>
        </Block>
    }
);

