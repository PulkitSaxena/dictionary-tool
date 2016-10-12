// local imports
var IROUTES             = require(__dirname + 'iRoutes.js');

/**
 * This defines the constructor for the general route class
 * @param {String} data
 * @param {object} config
 */

function GameRoutes(input, config){

  this._input           : input;
  this._config          : config;

}

// inheriting the basic structure
GameRoutes.prototype    = Object.create(IROUTES);

/**
 * This defines the function to detect the command type route and call feature
 * accordingly
 */

GameRoutes.prototype.route = function(){

  if(this._input){
    switch(this._input){
      case this._config.GAME_COMMANDS.TRY_AGAIN:
          break;
      case this_config.GAME_COMMANDS.HINT:
          break;
      case this._config.GAME_COMMANDS.QUIT:
          break;
    }
  }
}

module.exports  = GameRoutes;
