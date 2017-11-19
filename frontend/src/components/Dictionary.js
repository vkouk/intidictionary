import React, {Component} from 'react';

class Dictionary extends Component {
    state = { censoredWords: [] };

    componentDidMount() {
        fetch('/api/censoredwords')
            .then((response) => { return response.json() } )
            .catch((error) => console.warn("fetch error:", error))
            .then((censoredWords) => {
                this.setState({ censoredWords })
            });
    }

    render() {
        const { censoredWords } = this.state;

        return(
            censoredWords.forEach((i, word) => {
                console.log('Word: ' + i + " - value: " + word.word);
            })
        );
    }
}

export default Dictionary;