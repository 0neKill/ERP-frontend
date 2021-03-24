import React from 'react';
import classNames from "classnames";


//Antd
import {Button as BaseButton, ButtonProps} from 'antd';


interface IButtonProps extends ButtonProps {
    className?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = React.memo(({className, ...props}): React.ReactElement => (
    <BaseButton {...props}
                className={classNames('button', className)}/>
))
