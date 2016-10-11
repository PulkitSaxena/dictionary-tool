// local imports
var WEBNIK_SERVICE    = require(__dirname + '/../services/webnikService.js');
var DICTIONARY        = require(__dirname + '/../models/dictionary.js');

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
      console.log(err.body);
    });
  },

/**
 * feature to display synonyms of given word using getSynonyms webnik service.
 * @param {String} word
 */

  displaySynonyms: function(word){
    var deferred = WEBNIK_SERVICE.getSynonyms(word);
    deferred.then(function(response){
      console.log(response);
    },function(err){
      console.log(err.body);
    });
  },

/**
 * feature to display antonyms of given word using getAntonyms webnik service.
 * @param {String} word
 */

  displayAntonyms: function(word){
    var deferred = WEBNIK_SERVICE.getAntonyms(word);
    deferred.then(function(response){
      console.log(response);
    },function(err){
      console.log(err.body);
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
      data         = {},
      self         = this;

  JSON.parse(defArray).forEach(function(def){
    definitions.push(def.partOfSpeech + ' | ' + def.text);
  });

  data['definitions'] = definitions;
  return data;
}

// exporting module
module.exports = generalFeatures;
