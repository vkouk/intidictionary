import React, {Component} from 'react';
import firebase from 'firebase';
import {ProfileTable, ProfileTableTd, ProfileTableTh, ProfileTableTr } from "../templates/ProfileTemplate";
import UpdateProfile from "./UpdateProfile";

class Profile extends Component {
    render() {
        const { currentUser } = firebase.auth();

        return (
            (currentUser)
                ? <div>
                    <ProfileTable>
                        <thead>
                        <ProfileTableTr>
                            <ProfileTableTh>Username</ProfileTableTh>
                            <ProfileTableTh>Email</ProfileTableTh>
                            <ProfileTableTh>Avatar</ProfileTableTh>
                        </ProfileTableTr>
                        </thead>
                        <tbody>
                        <ProfileTableTr>
                            <ProfileTableTd>{`${currentUser.displayName}`}</ProfileTableTd>
                            <ProfileTableTd>{`${currentUser.email}`}</ProfileTableTd>
                            <ProfileTableTd><img src={currentUser.photoURL} style={{width: '100px', height: '100px'}} alt={currentUser.displayName}/></ProfileTableTd>
                        </ProfileTableTr>
                        </tbody>
                    </ProfileTable>

                    <UpdateProfile />
                </div>
                :
                <div>
                    <p>Please sign in before access this page.</p>
                </div>
        )
    }
}

export default Profile;