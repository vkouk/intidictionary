import React, {Component} from 'react';
import NavBar from "./NavBar";
import Login from "./Login";
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppTemplate, Header} from '../templates/AppTemplate';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: null
        };

        firebase.initializeApp({
            apiKey: "AIzaSyAbDH47blxxW2SLozaKkaVvRXmdvvDgG7U",
            authDomain: "intidirectory.firebaseapp.com",
            databaseURL: "https://intidirectory.firebaseio.com",
            projectId: "intidirectory",
            storageBucket: "",
            messagingSenderId: "237515571968"
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
                        intidirectory
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