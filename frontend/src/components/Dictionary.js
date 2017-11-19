import React, {Component} from 'react';

class Dictionary extends Component {
    state = { censoredWords: [] };

    componentDidMount() {
        fetch('http://localhost:3001/api/censoredwords')
            .then((response) => { return response.json() } )
            .catch((error) => console.warn("fetch error:", error))
            .then((censoredWords) => {
                this.setState({ censoredWords })
            });
    }

    render() {
        const { censoredWords } = this.state;

        return(
            <div>
                Hello.
            </div>
        );
    }
}

export default Dictionary;