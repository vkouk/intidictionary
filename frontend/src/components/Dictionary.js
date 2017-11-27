import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ajax from "../utils/ajax";

class Dictionary extends Component {
    state = { censoredWords: [], gr_words: [], en_words: [] };

    async componentDidMount() {
        const censoredWords = await ajax.fetchCensoredWords();
        const gr_words = await ajax.fetchGrWords();
        const en_words = await ajax.fetchEnWords();
        this.setState({ censoredWords, gr_words, en_words });
    }

    render() {
        const { censoredWords } = this.state;

        return(
            <div>
                {/*{censoredWords.map(word => {*/}
                    {/*return(*/}
                        {/*<SelectField value={word.key} onChange={this.handleChange}>*/}
                            {/*<MenuItem value={word.key} label={word.word} primaryText={word.word} />*/}
                        {/*</SelectField>*/}
                    {/*);*/}
                {/*})}*/}
            </div>
        );
    }
}

export default Dictionary;