import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import {LoginTemplate, LoginTemplateH1} from '../templates/LoginTemplate';
import firebase from 'firebase';

class Logout extends Component {
    async logoutUser() {
        try {
            await firebase.auth().signOut()
                .then(() => {
                    console.log("Succesfully logout.");
                })
                .catch((error => {
                    console.log(error);
                }))
        }
        catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
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
        );
    }
}

export default Logout;