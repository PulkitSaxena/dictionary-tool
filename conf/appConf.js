// app config variable

var CONF = {
  // app name to be uniformally used in whole app
  APP_NAME          : 'DictionaryTool',

  // wordnik api key
  API_KEY           : '61f9ab4418bb5f1b1f5040ac8df09c3233a9e54893052d5a9',

  // diasbled the game routes
  ENABLE_GAME_ROUTES: false,

  // API url
  API_URL           : {
    BASE_URL              : 'http://api.wordnik.com:80/v4/word.json/',
    DEFINITIONS           : '/definitions?limit=100&includeRelated=true&useCanonical=false&includeTags=false&api_key=',
    SYNONYMS              : '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=',
    ANTONYMS              : '/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=',
    EXAMPLES              : '/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=',
    WORD_OF_THE_DAY_PRE   : 'http://api.wordnik.com:80/v4/words.json/wordOfTheDay?date=',
    WORD_OF_THE_DAY_POST  : '&api_key=',
    RANDOM_WORD           : 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1'
                            + '&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key='
  },

  APP               : './dict',

  // general commands
  COMMANDS          : {
    DEFINITIONS  : 'def',
    SYNONYMS     : 'syn',
    ANTONYMS     : 'ant',
    EXAMPLES     : 'ex',
    DICTIONARY   : 'dict',
    HELP         : '--help',
    PLAY         : 'play'
  },

  // possible game inputs
  GAME_COMMANDS     :{
    TRY_AGAIN    : '1',
    HINT         : '2',
    QUIT         : '3'
  },

};

module.exports = CONF;
