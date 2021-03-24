import React from 'react';
import {Form, Result} from 'antd';

//Components

//Types
import {Block, Spinner} from "../../../../components";
import {IConfirmResponse} from "../../../../types/utils/general";

interface ConfirmProps extends IConfirmResponse {
    loading: boolean
}

export const Confirm: React.FunctionComponent<ConfirmProps> = ({
                                                                   status,
                                                                   title,
                                                                   subTitle,
                                                                   loading
                                                               }) => {
    return (
        <>
            {
                loading ? <Spinner/> :
                    <Block title='Подтверждение'>
                        <Form
                            className="auth__form"
                        >
                            <Result
                                status={status}
                                title={title}
                                subTitle={subTitle}
                            />
                        </Form>
                    </Block>}
        </>
    )
}