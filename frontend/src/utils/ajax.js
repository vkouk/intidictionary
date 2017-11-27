export default {
  async fetchCensoredWords() {
      try {
          let response = await fetch('/api/censoredwords');
          let responseJson = await response.json();
          return responseJson;
      }
      catch(error) {
          console.error(error);
      }
  },

    async fetchGrWords() {
        try {
            let response = await fetch('/api/gr_words');
            let responseJson = await response.json();
            return responseJson;
        }
        catch(error) {
            console.error(error);
        }
    },

    async fetchEnWords() {
        try {
            let response = await fetch('/api/en_words');
            let responseJson = await response.json();
            return responseJson;
        }
        catch(error) {
            console.error(error);
        }
    }
};