import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Logout from "../components/Logout";
import NotFound from "../components/404";

const createRoutes = () => {
    return (
        <Route
            path="/"
            component={App}
        >
            <IndexRoute
                component={Home}
            />
            <Route
                path={'/profile'}
                component={Profile}
            />
            <Route
                path={'/logout'}
                component={Logout}
            />
            <Route
                path={'*'}
                component={NotFound}
            />
        </Route>
    )
};

const Routes = createRoutes();

export default Routes;