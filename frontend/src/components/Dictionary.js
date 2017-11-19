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
            <div>
                {censoredWords.map(word => {
                    return(
                        <li key={word.id}>{word.word}</li>
                    )
                })}
            </div>
        );
    }
}

export default Dictionary;