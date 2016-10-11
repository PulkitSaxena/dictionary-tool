// local imports
var WEBNIK_SERVICE    = require(__dirname + '/../services/webnikService.js');

// public exposed features
var generalFeatures   = {

/**
 * feature to display definitions of given word using getDefinition webnik service.
 * @param {String} word
 */

  displayDefinitions: function(word){
    var deferred = WEBNIK_SERVICE.getDefinitions(word);
    deferred.then(function(response){
      console.log(response);
    },function(err){
      console.log(err.body);
    });
  },

/**
 * feature to display synonyms of given word using getSynonyms webnik service.
 * @param {String} word
 */

  displaySynonyms: function(){
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

  displayAntonyms: function(){
    var deferred = WEBNIK_SERVICE.getAntonyms(word);
    deferred.then(function(response){
      console.log(response);
    },function(err){
      console.log(err.body);
    });
  }

};

// exporting module
module.exports = generalFeatures;
