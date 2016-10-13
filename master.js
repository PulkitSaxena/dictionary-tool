/**
 * Handles user interaction and calls route accordingly to it
 */

// system imports
var READLINE       = require('readline');

// local imports
var MESSAGE        = require(__dirname + '/utils/message.js'),
    ROUTES         = require(__dirname + '/routes/routes'),
    CONFIG         = require(__dirname + '/conf/appConf.js'),
    GAME_STATE     = require(__dirname + '/utils/gameState.js');


// creating a command line interface for interaction with user
var inputInterface = READLINE.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

// startup message for user
console.log(MESSAGE.STARTUP_MESSAGE);

// attaching the listeners to our input interface's line event
inputInterface.on('line', (line) => {
  // calling routes
  ROUTES(line.trim(), CONFIG, GAME_STATE);
  // reset prompt marker to new line
  inputInterface.prompt();
});

// listener when input stream receives a <ctrl>-C input
inputInterface.on('SIGINT', () => {
  inputInterface.question('Are you sure you want to exit app? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) inputInterface.pause();
  });

});
