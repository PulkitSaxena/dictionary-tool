// local imports
var WEBNIK_SERVICE    = require(__dirname + '/../services/webnikService.js');
var DICTIONARY        = require(__dirname + '/../models/dictionary.js');
var MESSAGES         = require(__dirname + '/../utils/message.js');
var COLORS            = require('colors/safe');

// public exposed features
var generalFeatures   = {

/**
 * feature to display definitions of given word using getDefinition webnik service.
 * @param {String} word
 */

  displayDefinitions: function(word){
    var deferred      = WEBNIK_SERVICE.getDefinitions(word),
        processedData;

    deferred.then(function(response){
      processedData = _processDefinitionData(response.body);
      _getDictionaryModel(word, processedData).showDictionary();
    },function(err){
      console.log(COLORS.red(err.body));
    });
  },

/**
 * feature to display synonyms of given word using getSynonyms webnik service.
 * @param {String} word
 */

  displaySynonyms: function(word){
    var deferred      = WEBNIK_SERVICE.getSynonyms(word),
        processedData;

    deferred.then(function(response){
      processedData = _processRelatedWords('synonyms', JSON.parse(response.body));
      _getDictionaryModel(word, processedData).showDictionary();
    },function(err){
      console.log(COLORS.red(err.body));
    });
  },

/**
 * feature to display antonyms of given word using getAntonyms webnik service.
 * @param {String} word
 */

  displayAntonyms: function(word){
    var deferred = WEBNIK_SERVICE.getAntonyms(word),
        processedData;

    deferred.then(function(response){
      processedData = _processRelatedWords('antonyms', JSON.parse(response.body));
      _getDictionaryModel(word, processedData).showDictionary();
    },function(err){
      console.log(COLORS.red(err.body));
    });
  }

};

/**
 * Creates and returns a dictionary model object
 * @param {String} word
 * @private
 */

function _getDictionaryModel(word, data){
    return new DICTIONARY(word, data);
}

/**
 * Processes the elements of definition array
 * @param {Array} defArray
 * @private
 */

function _processDefinitionData(defArray){
  var definitions  = [],
      data         = {};

  JSON.parse(defArray).forEach(function(def){
    definitions.push(def.partOfSpeech + ' | ' + def.text);
  });

  if(definitions.length == 0)
    console.log(COLORS.red(MESSAGES.NO_DATA));
  data['definitions'] = definitions;
  return data;
}

/**
 * Processes the elements of related words array
 * @param {String} type
 * @private
 */

function _processRelatedWords(type, body){
  var relatedWords = [],
      data         = {};

  if(body.length == 0)
    console.log(COLORS.red(MESSAGES.NO_DATA));

  (body[0].words).forEach(function(word){
    relatedWords.push(word + ',');
  });
  data[type] =  relatedWords;
  return data;
}

// exporting module
module.exports = generalFeatures;
