import React from 'react';
import classNames from 'classnames'

type ContainerProps = {
    className?: string,
    size?: 'small' | 'large'
}
export const Container: React.FunctionComponent<ContainerProps> = ({
                                                                       children,
                                                                       className,
                                                                       size
                                                                   }): React.ReactElement => (
    <div className={classNames('container', className, size)}>
        {children}
    </div>
)

