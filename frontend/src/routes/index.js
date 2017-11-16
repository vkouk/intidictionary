import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Profile from '../components/Profile';

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
        </Route>
    )
};

const Routes = createRoutes();

export default Routes;