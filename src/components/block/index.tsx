import React from 'react';
import classNames from "classnames";

type BlockProps = {
    className?: string,
    title?: string,
    subtitle?: string,
}

export const Block: React.FunctionComponent<BlockProps> = React.memo(({
                                                                          className,
                                                                          title,
                                                                          subtitle,
                                                                          children
                                                                      }) => (
    <div className={classNames('block', className)}>
        <header className='header-block'>
            <h2 className="header-block__title">{title}</h2>
            <p className="header-block__subtitle">{subtitle}</p>
        </header>
        {children}
    </div>
))