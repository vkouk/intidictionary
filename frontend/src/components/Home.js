import React, {Component} from 'react';
import Dictionary from './Dictionary';
import firebase from 'firebase';

class Home extends Component {
    render() {
        const { currentUser } = firebase.auth();

        return (
            <div>
                <p>{`Hello ${currentUser.displayName}`}</p>
                <Dictionary />
            </div>
        )
    }
}

export default Home;