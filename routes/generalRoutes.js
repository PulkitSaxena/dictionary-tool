var GENERAL_FEATURES  = require(__dirname + '/../controllers/generalFeatures.js');

/**
 * This defines the constructor for the general route class
 * @param {String} data
 * @param {object} config
 */

function GeneralRoutes(data, config){

  // data
  this._app       = data[0];
  this._command   = data[1];
  this._word      = data[2];
  this._config    = config;

}

/**
 * This defines the function to detect the command type route and call feature
 * accordingly
 */

GeneralRoutes.prototype.route = function(){

  if(this._app && this._app == this._config.APP){

    switch(this._command){
      case this._config.COMMANDS.DEFINITIONS:
          GENERAL_FEATURES.displayDefinitions(this._word);
          break;
      case this._config.COMMANDS.SYNONYMS:
          GENERAL_FEATURES.displaySynonyms(this._word);
          break;
      case this._config.COMMANDS.ANTONYMS:
          GENERAL_FEATURES.displayAntonyms(this._word);
          break;
    }
  }

};

// exporting the class
module.exports = GeneralRoutes;
