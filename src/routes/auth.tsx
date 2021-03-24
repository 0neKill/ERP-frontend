import React from 'react';
import {Route} from "react-router-dom";

import {AuthPage} from "../pages";
import {SingIn, SingUp, Confirm} from "../layouts";

export default function Auth() {
    return <AuthPage>
        <Route exact path={['/', '/sing_in']} component={SingIn}/>
        <Route exact path='/sing_up' component={SingUp}/>
        <Route exact path='/verify' component={Confirm}/>
    </AuthPage>
}