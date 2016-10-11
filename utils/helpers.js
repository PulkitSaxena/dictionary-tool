// imports
var COLORS  = require('colors/safe');

// Defines all the helper functions

var Helpers = {

/**
* This prints heading and each element of the array
* @param {array} array
*/

  showArrayData : function(heading, array){
    if(array.length == 0)
      return;
    // printing heading
    console.log(COLORS.green('------------------------------------------------------------------'));
    console.log(COLORS.green(heading) + '\n');
    // printing data
    array.forEach((el) => {
      console.log(COLORS.blue(el + '\n'));
    });
  },

};

// exporting helper module
module.exports = Helpers;
