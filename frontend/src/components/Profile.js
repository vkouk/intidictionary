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
                        </ProfileTableTr>
                        </thead>
                        <tbody>
                        <ProfileTableTr>
                            <ProfileTableTd>{`${currentUser.displayName}`}</ProfileTableTd>
                            <ProfileTableTd>{`${currentUser.email}`}</ProfileTableTd>
                        </ProfileTableTr>
                        </tbody>
                    </ProfileTable>

                    <UpdateProfile email={currentUser.email} displayName={currentUser.displayName} photoURL={currentUser.photoURL}/>
                </div>
                :
                <div>
                    <p>Please sign in before access this page.</p>
                </div>
        )
    }
}

export default Profile;