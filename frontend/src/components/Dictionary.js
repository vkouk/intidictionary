import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import {DictionaryTemplate, DictionaryParagraph} from '../templates/DictionaryTemplate';
import ajax from "../utils/ajax";

const styles = {
    searchIcon: {
        width: 48,
        height: 48,
        color: '#478eae'
    },
    iconButton: {
        width: 96,
        height: 96,
        padding: 24,
    },
    translateField: {
        width: '70%'
    }
};

class Dictionary extends Component {
    state = { censoredWords: [], gr_words: [], en_words: [], error: '', searchText: '', translatedWord: '', choice: 'gr'};

    async componentDidMount() {
        const censoredWords = await ajax.fetchCensoredWords();
        const gr_words = await ajax.fetchGrWords();
        const en_words = await ajax.fetchEnWords();
        this.setState({ censoredWords, gr_words, en_words });
    }

    handleChoiceChange = (event, index, choice) => this.setState({choice, translatedWord: '', searchText: '', error: ''});

    searchedWords = () => [
        ...this.state.en_words.map(word => word.en_word),
        ...this.state.gr_words.map(word => word.gr_word)
    ];

    translateWord = () => {
        const { censoredWords, gr_words, en_words, searchText, choice } = this.state;
        const censoredwords = censoredWords.map(word => word.word);

        if (choice === 'gr') {
            const enWords = en_words.map(word => word.en_word);

            if (censoredwords.includes(searchText)) {
                this.setState({ error: 'This is a censored word to translate.' });
            }
            if (enWords.includes(searchText)) {
                let enwordposition = enWords.indexOf(searchText) + 1;
                let grWord = gr_words.map(word => {
                    if (enwordposition === word.en_word_id) {
                        return word.gr_word
                    }

                    return grWord;
                });
                this.setState({ error: '', translatedWord: grWord });
            }
        }
        if (choice === 'en') {
            const grWords = gr_words.map(word => word.gr_word);

            if (grWords.includes(searchText)) {
                let grwordposition = grWords.indexOf(searchText) + 1;
                let enWord = en_words.map(word => {
                   if (grwordposition === word.id) {
                        return word.en_word;
                   }

                   return enWord;
                });
                this.setState({ error: '', translatedWord: enWord });
            }
        }
    };

    render() {
        return(
            <DictionaryTemplate>
                <div>
                    <DictionaryParagraph>Translate your word!</DictionaryParagraph>
                    <AutoComplete
                        hintText="Type a word to translate..."
                        fullWidth={true}
                        style={styles.translateField}
                        dataSource={this.searchedWords()}
                        filter={AutoComplete.caseInsensitiveFilter}
                        onUpdateInput={(searchText) => this.setState({ searchText })}
                        maxSearchResults={5}
                        errorText={`${this.state.error}`}
                    />
                    <IconButton
                        style={styles.iconButton}
                        iconStyle={styles.searchIcon}
                        onClick={this.translateWord}
                    >
                        <FindInPage/>
                    </IconButton>
                    <SelectField
                        value={this.state.choice}
                        onChange={this.handleChoiceChange}
                    >
                        <MenuItem value={'gr'} primaryText="English - Greek" />
                        <MenuItem value={'en'} primaryText="Greek - English" />
                    </SelectField>
                </div>
                {
                    (this.state.choice === 'gr') ?
                        <div>
                            <p>Η αντίστοιχη λέξη στα Ελληνικά είναι: {this.state.translatedWord}</p>
                        </div>
                        :
                        <div>
                            <p>It's English equivalent is: {this.state.translatedWord}</p>
                        </div>
                }
            </DictionaryTemplate>
        );
    }
}

export default Dictionary;