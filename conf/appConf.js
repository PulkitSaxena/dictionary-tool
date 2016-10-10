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
    BASE_URL     : 'http://api.wordnik.com:80/v4/word.json/',
    DEFINITIONS  : '/definitions?limit=100&includeRelated=true&useCanonical=false&includeTags=false&api_key=',
    SYNONYMS     : '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=',
    ANTONYMS     : '/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=',

  }
};

module.exports = CONF;
