// local imports
var GENERAL_ROUTES = require(__dirname + '/generalRoutes.js');

/**
 * This defines selection of route type, takes two parameters.
 * @param {String} data
 * @param {object} config
 */

function Routes(data, config){

  // if either data or config not present return
  if(!data || !config)
    return;

  // split the data to extract app(./dic), command and word
  data = data.split(' ');

  // select the type of routes either general or word game related
  if(config['ENABLE_GAME_ROUTES'] == false){
    new GENERAL_ROUTES(data, config).route();
  }
  else if(config['ENABLE_GAME_ROUTES'] == true){

  }

};

module.exports = Routes;
