import React from 'react';
import {Container} from "../../components";

export const AuthPage: React.FunctionComponent = ({children}) => {
    return (
        <section className='auth'>
            <Container size='large' className='auth__container'>
                {children}
            </Container>
        </section>
    );
};

