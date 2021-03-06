import React, {Component} from 'react';
import NavBar from "./NavBar";
import Login from "./Login";
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppTemplate, Header} from '../templates/AppTemplate';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: null
        };

        firebase.initializeApp({
            apiKey: "AIzaSyD-IvvvLgux_DswkPakJHIxL-pBc9moJrg",
            authDomain: "intidictionary.firebaseapp.com",
            databaseURL: "https://intidictionary.firebaseio.com",
            projectId: "intidictionary",
            storageBucket: "intidictionary.appspot.com",
            messagingSenderId: "995606826043"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({isLoggedIn: true});
            } else {
                this.setState({isLoggedIn: false});
            }
        });
    }

  render() {
    const { isLoggedIn } = this.state;

    return (
        (isLoggedIn) ?
            <MuiThemeProvider>
                <div>
                    <NavBar/>
                    <Header>
                        intidictionary
                    </Header>
                    <AppTemplate>
                        {this.props.children}
                    </AppTemplate>
                </div>
            </MuiThemeProvider>
            :
            <MuiThemeProvider>
                <div>
                    <NavBar/>
                    <Login/>
                </div>
            </MuiThemeProvider>
    )
  }
}

export default App;