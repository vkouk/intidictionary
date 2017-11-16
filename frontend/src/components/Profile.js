import React, {Component} from 'react';
import firebase from 'firebase';
import {ProfileTable, ProfileTableTd, ProfileTableTh, ProfileTableTr } from "../templates/ProfileTemplate";
import UpdateProfile from "./UpdateProfile";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            userUid: '',
            email: '',
            displayName: '',
            photoUrl: ''
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
                            displayName: snapshot.val().displayName,
                            photoUrl: snapshot.val().photoUrl
                        });
                    }
                });
            }
        });
    }

    render() {
        const { email, displayName, photoUrl } = this.state;
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
                            <ProfileTableTd>{(displayName) ? displayName : "Hasn't set name yet."}</ProfileTableTd>
                            <ProfileTableTd>{email}</ProfileTableTd>
                        </ProfileTableTr>
                        </tbody>
                    </ProfileTable>

                    <UpdateProfile email={email} displayName={displayName} photoUrl={photoUrl}/>
                </div>
                :
                <div>
                    <p>Please sign in before access this page.</p>
                </div>
        )
    }
}

export default Profile;