// imports
var colors  = require('colors/safe');

// Defines all the helper functions

var Helpers = {

/**
* This prints each element of the array
* @param {array} array
*/

  showArrayData : function(array){
    array.forEach((el) => {
      console.log(colors.blue(el + '\n'));
    });
  }

};

// exporting helper module
module.exports = Helpers;
