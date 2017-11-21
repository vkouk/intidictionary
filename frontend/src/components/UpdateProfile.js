import React, {Component} from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Email from 'material-ui/svg-icons/communication/email';
import { UpdateProfileTemplate, UpdateProfileTemplateH1, SuccessMessage } from '../templates/UpdateProfileTemplate';

class UpdateProfile extends Component {
    state = {
        error: ''
    };

    async verifyEmail() {
        const user = firebase.auth().currentUser;

        try {
            await user.sendEmailVerification().then(function() {
                console.log('Verification email sent.');
                document.getElementById('successUpdate').innerHTML = 'Check mailbox and verify your email.';
            }).catch(function (error) {
                console.log(error);
                this.setState({error})
            })
        }
        catch(error) {
            console.log(error);
            this.setState({error});
        }
    }

    async updateprofile() {
        const user = firebase.auth().currentUser;

        try {
            await user.updateProfile({}).then(function() {
                console.log('User updated successful personal informations.');
                document.getElementById('successUpdate').innerHTML = 'Personal informations updated succesfully.';
            }).catch(function (error) {
                console.log(error);
                this.setState({error})
            })
        }
        catch(error) {
            console.log(error);
            this.setState({error});
        }
    }

    render() {
        const { error } = this.state;
        const { currentUser } = firebase.auth();

        return(
            <UpdateProfileTemplate>
                <UpdateProfileTemplateH1>{`Update informations of ${(currentUser.displayName)}`}</UpdateProfileTemplateH1>
                <TextField
                    hintText="Username..."
                    floatingLabelText="Username"
                    type="text"
                    defaultValue={currentUser.displayName}
                    onChange={(event) => currentUser.updateProfile({displayName: event.target.value})}
                    errorText={`${error}`}
                /><br />
                <TextField
                    hintText="Photo url..."
                    floatingLabelText="Photo Url"
                    type="text"
                    fullWidth={true}
                    defaultValue={currentUser.photoURL}
                    onChange={(event) => currentUser.updateProfile({photoURL: event.target.value})}
                    errorText={`${error}`}
                /><br />
                <FlatButton
                    label="Update Profile"
                    labelPosition="before"
                    primary={true}
                    icon={<CheckCircle />}
                    onClick={this.updateprofile.bind(this)}
                /><br />
                {(!currentUser.emailVerified)
                    ?
                    <div>
                        <FlatButton
                            label="Verify "
                            labelPosition="before"
                            primary={true}
                            icon={<Email />}
                            onClick={this.verifyEmail.bind(this)}
                        /><br />
                    </div>
                    : null
                }
                <SuccessMessage id='successUpdate' />
            </UpdateProfileTemplate>
        )
    }
}

export default UpdateProfile;