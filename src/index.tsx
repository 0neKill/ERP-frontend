import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

//Utils
import './assets/scss/_index.scss';
import store from './store';

//Components
import Router from "./routes";

render(
    <Provider store={store}>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root-app'));