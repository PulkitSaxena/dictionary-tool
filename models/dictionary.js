// imports
var HELPERS   =  require(__dirname + '/../utils/helpers.js');

/**
 * This defines the constructor for the word dictionary model class
 * @param {String} word
 * @param {Object} data
 */

 function Dictionary(word, data){
   if(!data || word)
    return

  // private members
  this._word          =   word;
  this._definitions   =   data['definitions']? data['definitions']:[];
  this._antonyms      =   data['antonyms']? data['antonyms']:[];
  this._synonyms      =   data['synonyms']? data['synonyms']:[];
  this._examples      =   data['examples']? data['examples']:[];

 }

module.exports = Dictionary;
