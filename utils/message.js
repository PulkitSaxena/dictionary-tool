/**
 * Contains all the messages to be used in app
 */

 var Message = {

   STARTUP_MESSAGE: 'Dictionary Tool, help command: ./dict --help ',

   NO_DATA        : 'Sorry, no data for the given word',

   HELP_MESSAGE   : 'Available commands:\n\nFor definition:   ./dict def <word>'
                     + '\nFor synonyms:   ./dict syn <word>\nFor antonyms:   ./dic ant <word>'
                     + '\nFor examples:   ./dict ex <word>\nFor full dictionary: ./dict <word> or ./dict dict <word>'
                     + '\nFor word of the day dictionary:   ./dict\nFor word game:   ./dict play'
 };

 module.exports = Message;
