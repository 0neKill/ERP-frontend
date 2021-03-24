import React from 'react';
import {Switch, Route, Redirect, RouteProps} from 'react-router-dom';
import {connect} from "react-redux";

import {Spinner} from "../components";
import {IRootReducer} from "../types/store/reducers/rootReducer";
import {Platform} from "../types/utils/general";

const DashBoardRoute = React.lazy(() => import('./dashboard'));
const AuthRoute = React.lazy(() => import('./auth'));

const Router: React.FunctionComponent<IRouterProps> = ({auth, platform}): React.ReactElement => {
    return <React.Suspense fallback={<Spinner/>}>
        <Switch>
            {
                auth ?
                    <Route exact path={
                        [
                            '/dashboard',
                            '/report',
                            '/platforms',
                            '/providers',
                            '/storages',
                            '/orders',
                            '/products',
                        ]
                    }
                           component={DashBoardRoute}/> :
                    <Route exact path={['/', '/sing_in', '/sing_up', '/verify']} component={AuthRoute}/>
            }
            {
                auth ? <Redirect to='/dashboard'/> : <Route render={() => <div>404</div>}/>
            }
        </Switch>
    </React.Suspense>
};


interface IRouterProps extends RouteProps {
    auth: boolean,
    platform: Platform
}

const mapStateToProps = (state: IRootReducer): IRouterProps => ({
    auth: state.general.auth,
    platform: state.general.platform,
});

export default connect(mapStateToProps, {})(Router);