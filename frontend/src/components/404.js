import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Home from 'material-ui/svg-icons/action/home';
import {AppTemplate} from '../templates/AppTemplate';

const NotFound = () => {
    return (
        <MuiThemeProvider>
            <div>
                <AppTemplate>
                    <p>Page not found please go back.</p> {
                    <Link to={'/'}>
                        <RaisedButton
                            label="Home"
                            labelPosition="before"
                            primary={true}
                            icon={<Home />}
                        />
                    </Link>
                    }
                </AppTemplate>
            </div>
        </MuiThemeProvider>
    );
};

export default NotFound;