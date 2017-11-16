import React, {Component} from 'react';
import firebase from 'firebase';
import {ProfileTable, ProfileTableTd, ProfileTableTh, ProfileTableTr } from "../templates/ProfileTemplate";

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            userUid : '',
            email : '',
            displayName: ''
        };

        const auth = firebase.auth();
        let infoPath;

        auth.onAuthStateChanged((user) => {
            if (user) {
                infoPath = `users/${user.uid}/info`;
                firebase.database().ref().child(`${infoPath}`).on('value', (snapshot) => {
                    if (snapshot.val()) {
                        this.setState({
                            email: snapshot.val().email,
                            userUid : snapshot.val().uid,
                            displayName: snapshot.val().displayName
                        });
                    }
                });
            }
        });
    }

    render() {
        let { email, displayName } = this.state;
        const { currentUser } = firebase.auth();

        return (
            (currentUser)
                ? <div>
                    <ProfileTable>
                        <thead>
                        <ProfileTableTr>
                            <ProfileTableTh>Username</ProfileTableTh>
                            <ProfileTableTh>Email</ProfileTableTh>
                        </ProfileTableTr>
                        </thead>
                        <tbody>
                        <ProfileTableTr>
                            <ProfileTableTd>{(displayName) ? {displayName} : "Hasn't set name yet."}</ProfileTableTd>
                            <ProfileTableTd>{email}</ProfileTableTd>
                        </ProfileTableTr>
                        </tbody>
                    </ProfileTable>
                </div>
                :
                <div>
                    <p>Please sign in before access this page.</p>
                </div>
        )
    }
}

export default Profile;