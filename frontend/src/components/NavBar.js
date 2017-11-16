import React, {Component} from 'react';
import firebase from 'firebase';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Card, CardHeader} from 'material-ui/Card';
import {NavBarButton} from '../templates/NavBarTemplate';
import { Link } from 'react-router';

class NavBar extends Component {
    state = {
        open: true,
        width: 250
    };

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
                        backgroundColor: '#478eae',
                        height: '80px',
                        width: '100%',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}>
                        <Divider/>
                        {
                            (currentUser) ?
                                <Card>
                                    <CardHeader
                                        title={`Hello, ${currentUser.displayName}`}
                                        avatar={`${currentUser.photoURL}`}
                                    />
                                </Card>
                                :
                                <Card>
                                    <CardHeader
                                        title={'No User Logged In Yet'}
                                        avatar={'https://t4.ftcdn.net/jpg/00/97/00/09/160_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg'}
                                    />
                                </Card>
                        }
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
                        />
                    </Link>
                    <Divider/>
                    {
                        (currentUser) ? <Link to={'/logout'}>
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