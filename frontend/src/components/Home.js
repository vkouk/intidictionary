import React, {Component} from 'react';
import firebase from 'firebase';

class Home extends Component {
    render() {
        const { currentUser } = firebase.auth();

        return (
            <div>
                <p>{`Hello ${currentUser.email}`}</p>
            </div>
        )
    }
}

export default Home;