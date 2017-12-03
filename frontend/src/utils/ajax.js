export default {
  async fetchCensoredWords() {
      try {
          let response = await fetch('https://intidictionary.herokuapp.com/api/censoredwords');
          let responseJson = await response.json();
          return responseJson;
      }
      catch(error) {
          console.error(error);
      }
  },

    async fetchGrWords() {
        try {
            let response = await fetch('https://intidictionary.herokuapp.com/api/gr_words');
            let responseJson = await response.json();
            return responseJson;
        }
        catch(error) {
            console.error(error);
        }
    },

    async fetchEnWords() {
        try {
            let response = await fetch('https://intidictionary.herokuapp.com/api/en_words');
            let responseJson = await response.json();
            return responseJson;
        }
        catch(error) {
            console.error(error);
        }
    }
};