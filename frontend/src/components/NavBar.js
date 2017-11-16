import React, {Component} from 'react';
import firebase from 'firebase';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const nearbyIcon = <IconLocationOn />;

class NavBar extends Component {
    render() {
        const { currentUser } = firebase.auth();

        return (
            (currentUser) ?
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
                        <BottomNavigationItem
                            label="Logout"
                            icon={nearbyIcon}
                            onClick={() =>  window.location.href = '/login'}
                        />
                    </BottomNavigation>
                </Paper>
                :
                <Paper zDepth={2}>
                    <BottomNavigation>
                        <BottomNavigationItem
                            label="Home"
                            icon={nearbyIcon}
                            onClick={() =>  window.location.href = '/'}
                        />
                        <BottomNavigationItem
                            label="Login"
                            icon={nearbyIcon}
                            onClick={() =>  window.location.href = '/login'}
                        />
                    </BottomNavigation>
                </Paper>
        );
    }
}

export default NavBar;