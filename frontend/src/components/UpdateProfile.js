import React, {Component} from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import { UpdateProfileTemplate, UpdateProfileTemplateH1 } from '../templates/UpdateProfileTemplate';

class UpdateProfile extends Component {
    state = {
        error: ''
    };

    async updateprofile() {
        const user = firebase.auth().currentUser;

        try {
            await user.updateProfile({
               displayName: ''
            })
        }
        catch(error) {
            console.log(error);
            this.setState({error});
        }
    }

    render() {
        let { error } = this.state;
        const { displayName, email, photoURL } = this.props;
        const { currentUser } = firebase.auth();

        return(
            <UpdateProfileTemplate>
                <UpdateProfileTemplateH1>{`Update informations of ${(currentUser.displayName) ? currentUser.displayName : currentUser.email} account.`}</UpdateProfileTemplateH1>
                <TextField
                    hintText="Username..."
                    floatingLabelText="Username"
                    type="text"
                    value={displayName}
                    onChange={event => this.setState({email: event.target.value })}
                    errorText={`${error}`}
                /><br />
                <TextField
                    hintText="Email..."
                    floatingLabelText="Email"
                    type="text"
                    value={email}
                    onChange={event => this.setState({email: event.target.value })}
                    errorText={`${error}`}
                /><br />
                <TextField
                    hintText="Photo url..."
                    floatingLabelText="Photo Url"
                    type="text"
                    value={`${photoURL}`}
                    onChange={event => this.setState({email: event.target.value })}
                    errorText={`${error}`}
                /><br />
                <FlatButton
                    label="Update Profile"
                    labelPosition="before"
                    primary={true}
                    icon={<CheckCircle />}
                    onClick={this.updateprofile.bind(this)}
                /><br />
            </UpdateProfileTemplate>
        )
    }
}

export default UpdateProfile;