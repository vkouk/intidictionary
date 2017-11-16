import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const nearbyIcon = <IconLocationOn />;

class NavBar extends Component {

    render() {
        return (
            <Paper zDepth={2}>
                <BottomNavigation>
                    <BottomNavigationItem
                        label="Home"
                        icon={nearbyIcon}
                        onClick={() =>  window.location.href = '/'}
                    />
                    <BottomNavigationItem
                        label="Profile"
                        icon={nearbyIcon}
                        onClick={() =>  window.location.href = '/profile'}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default NavBar;