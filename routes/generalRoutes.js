/**
 * This defines the constructor for the general route class
 * @param {String} data
 * @param {object} config
 */

function GeneralRoutes(data, config){

  this._app       = data[0];
  this._command   = data[1];
  this._word      = data[2];

}

/**
 * This defines the function to detect the command type route and call feature
 * accordingly
 */

GeneralRoutes.prototype.route = function(){

  if(this._app){
    console.log(this._app);
    switch(this._command){

    }
  }

};

// exporting the class
module.exports = GeneralRoutes;
