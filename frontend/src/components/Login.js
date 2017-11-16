import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import {LoginTemplate, LoginTemplateH1} from '../templates/LoginTemplate';
import firebase from 'firebase';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    async logoutUser() {
            try {
                await firebase.auth().signOut()
                    .then(() => {
                        console.log("Succesfully logout.");
                        this.setState({
                            email: '',
                            password: ''
                        });
                    })
                    .catch((error => {
                        console.log(error);
                    }))
            }
            catch(error) {
            console.log(error);
        }
    }

    async userLoginRegister() {
        const { email, password } = this.state;
        const ref = firebase.database().ref();

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("Signed in with ", email);
                    this.setState({
                        email: '',
                        password: '',
                        error: ''
                    });
                })
                .catch(async () => {
                    await firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then((user) => {
                            console.log("Account created!");
                            this.setState({
                                email: '',
                                password: '',
                                error: ''
                            });

                            ref.child(`users/${user.uid}/info`)
                                .set({
                                    email: user.email,
                                    uid: user.uid
                                })
                                .then(() => user)
                        })
                        .catch((error) => {
                            console.log(error);
                            this.setState({error});
                        })
                })
        }
        catch(error) {
            console.log(error);
            this.setState({error});
        }
    }

    render() {
        let { email, password, error } = this.state;
        const { currentUser } = firebase.auth();

        return (
            (!currentUser) ?
                <LoginTemplate>
                    <LoginTemplateH1>Login or create an account</LoginTemplateH1>
                    <TextField
                        hintText="Email..."
                        floatingLabelText="Email"
                        type="text"
                        value={email}
                        onChange={event => this.setState({email: event.target.value })}
                        errorText={`${error}`}
                    /><br />
                    <TextField
                        hintText="Password..."
                        floatingLabelText="Password"
                        type="password"
                        value={password}
                        onChange={event => this.setState({password: event.target.value })}
                        errorText={`${error}`}
                    /><br />
                    <FlatButton
                        label="Login / Register"
                        labelPosition="before"
                        primary={true}
                        icon={<CheckCircle />}
                        onClick={this.userLoginRegister.bind(this)}
                    /><br />
                </LoginTemplate>
                :
                <LoginTemplate>
                    <LoginTemplateH1>Logout by pressing the button.</LoginTemplateH1>
                <FlatButton
                    label="Logout"
                    labelPosition="before"
                    primary={true}
                    icon={<CheckCircle />}
                    onClick={this.logoutUser.bind(this)}
                />
                </LoginTemplate>
        )
    }
}

export default Login;