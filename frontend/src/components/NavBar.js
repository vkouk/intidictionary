import React, {Component} from 'react';
import firebase from 'firebase';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Card, CardHeader} from 'material-ui/Card';
import {NavBarButton} from '../templates/NavBarTemplate';
import { Link } from 'react-router';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            open: true,
            width: 250
        };
    }

    toggleNav = () => {
        this.setState((prevState, props) => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {
        const { currentUser } = firebase.auth();
        let { open, width } = this.state;

        return (
            <div>
                <NavBarButton
                    onClick={this.toggleNav}
                    width={width}
                    open={open}
                />
                <Drawer
                    open={open}
                    width={width}
                >
                    <div
                    style={{
                        height: '80px',
                        width: '100%',
                        backgroundColor: '#478eae',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}>
                        Intidirectory
                    </div>
                    <Link to={'/'}>
                        <MenuItem
                            onClick={this.toggleNav}
                            primaryText={'Home'}
                        />
                    </Link>
                    <Divider/>
                    <Link to={'/profile'}>
                        <MenuItem
                            onClick={this.toggleNav}
                            primaryText={'Profile'}
                        >
                            {
                                (currentUser) ?
                                <Card>
                                    <CardHeader
                                        title={`${currentUser.displayName}`}
                                        avatar={`${currentUser.photoURL}`}
                                    />
                                </Card>
                                :
                                null
                            }
                        </MenuItem>
                    </Link>
                    <Divider/>
                    {
                        (currentUser) ? <Link to={'/login'}>
                            <MenuItem
                                onClick={this.toggleNav}
                                primaryText={'Logout'}
                            />
                        </Link> : null
                    }
                </Drawer>
            </div>
        );
    }
}

export default NavBar;