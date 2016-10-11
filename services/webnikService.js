// module imports
var DEFERRED      = require('deferred');
var REQUESTIFY    = require('requestify');

// local imports
var CONF          = require(__dirname + '/../conf/appConf.js');

// public exposed service functions
var WebnikApi     = {

  /**
   * Service for fetching definitions from webnik.
   * @param {String} word
   */

  getDefinitions: function(word){
    var apiUrl      = CONF.API_URL.BASE_URL + word + CONF.API_URL.DEFINITIONS + CONF.API_KEY,
        deferred    = _requestApi(apiUrl);
    return deferred;
  },

  /**
   * Service for fetching synonyms from webnik.
   * @param {String} word
   */

  getSynonyms: function(word){
    var apiUrl      = CONF.API_URL.BASE_URL + word + CONF.API_URL.SYNONYMS + CONF.API_KEY,
        deferred    = _requestApi(apiUrl);
    return deferred;
  },

  /**
   * Service for fetching antonyms from webnik.
   * @param {String} word
   */

  getAntonyms: function(word){
    var apiUrl      = CONF.API_URL.BASE_URL + word + CONF.API_URL.ANTONYMS + CONF.API_KEY,
        deferred    = _requestApi(apiUrl);
    return deferred;
  },

  /**
  * Service for fetching examples from webnik.
  * @param {String} word
  */

  getExamples: function(word){
    var apiUrl      = CONF.API_URL.BASE_URL + word + CONF.API_URL.EXAMPLES + CONF.API_KEY,
        deferred    = _requestApi(apiUrl);
    return deferred;
  },

  /**
   * Service for fetching word of the day from webnik.
   * @param {String} word
   */
  getWordOfTheDay: function(){
    var currentDate  = (new Date()).toISOString().slice(0,10),
        apiUrl       = CONF.API_URL.WORD_OF_THE_DAY_PRE + currentDate
                       + CONF.API_URL.WORD_OF_THE_DAY_POST + CONF.API_KEY;
        deferred     = _requestApi(apiUrl);
    return deferred;
  }

};

// Private functions

/**
 * Private function to hit the api and return response
 * @param {String} url
 */

function _requestApi(apiUrl){
  var deferred = DEFERRED();

  REQUESTIFY.get(apiUrl)
      .then(function (response) {
          deferred.resolve(response);
      })
      .catch(function (error) {
          deferred.reject(error);
      });
  return deferred.promise;
}

module.exports = WebnikApi;
