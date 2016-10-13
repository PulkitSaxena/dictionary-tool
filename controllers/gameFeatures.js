// local imports
var WEBNIK_SERVICE    = require(__dirname + '/../services/webnikService.js');
var MESSAGES          = require(__dirname + '/../utils/message.js');
// module imports
var COLORS            = require('colors/safe');
var DEFERRED          = require('deferred');



// public exposed game features
var GameFeatures  = {

  /**
  * initializes the game and sets the game state
  * @param {JSON} gameState
  */

  initializeGame : function(gameState){
    var self      = this;
    var deferredArray;

    // enable the game
    gameState.GAME_ENABLED = true;
    // get the word
    this.getGameWordData(gameState).then(function(word){

      deferredArray = self.getDataRelatedToWord(gameState.WORD, gameState);
      // when all the data fetched create and ask question
      DEFERRED.map(deferredArray, function(promise){return promise;}).then(function(result){
          self.askQuestion(gameState);
        },function(err){
            console.log(COLORS.red(MESSAGE.GAME_START_ERROR));
        });
    },function(err){
        console.log(COLORS.red(MESSAGE.GAME_START_ERROR));
    });
  },

  /**
  *  fetches a random word for game
  * @param {JSON} gameState
  */

  getGameWordData: function(gameState){
    var deferred  = WEBNIK_SERVICE.getRandomWord(),
        wordDef   = DEFERRED();

    deferred.then(function(response){
      var body = JSON.parse(response.body);
      if(!body.word)
        console.log(COLORS.red(MESSAGE.NO_DATA));
      else {
        // saving word in game state
        gameState.WORD = body.word ;
        //resolving the promise as word set successfully
        wordDef.resolve(body.word);
      }

    },function(err){
      console.log(COLORS.red(err.body));
      wordDef.reject();
    });
    return wordDef.promise;
  },

  /**
  *  fetches a random word for game and its def, syn and ant
  * @param {JSON} gameState
  */

  getDataRelatedToWord: function(word, gameState){
        // service promises
    var definitionDef   = WEBNIK_SERVICE.getDefinitions(word);
        synonymsDef     = WEBNIK_SERVICE.getSynonyms(word),
        antonymsDef     = WEBNIK_SERVICE.getAntonyms(word),
        processedDef    = DEFERRED(),
        processedSyn    = DEFERRED(),
        processedAnt    = DEFERRED(),
        defArray        = [];

    // extracting definitions
    definitionDef.then(function(response){
      JSON.parse(response.body).forEach(function(def){
        gameState.DEFINITIONS.push('DEFINITION' + ' | ' + def.text);
      });
      // resolve when data is processed
      processedDef.resolve();
    },function(er){
      console.log(COLORS.red(MESSAGE.NO_DATA + ' definition'));
    });

    // extracting synonyms

    synonymsDef.then(function(response){
      var body = JSON.parse(response.body);
      if(body.length > 0){
        (body[0].words).forEach(function(word){
          gameState.SYNONYMS.push('SYNONYM | ' + word);
        });
      }
      // resolve when data is processed
      processedSyn.resolve();
    },function(err){
      console.log(COLORS.red(MESSAGE.NO_DATA + ' synonyms'));
    });

    // extracting antonyms

    antonymsDef.then(function(response){
      var body = JSON.parse(response.body);
      if(body.length > 0){
        (body[0].words).forEach(function(word){
          gameState.ANTONYMS.push('ANTONYM | ' + word);
        });
      }
      // resolve when data is processed
      processedAnt.resolve();
    },function(err){
      console.log(COLORS.red(MESSAGE.NO_DATA + ' antonyms'));
    });

    // returning the array of promises
    defArray.push(processedDef.promise);
    defArray.push(processedSyn.promise);
    defArray.push(processedAnt.promise);

    return defArray;
  },

  /**
  *  asks the question for the just fetched random question
  * @param {JSON} gameState
  */

  askQuestion: function(gameState){
    
  }

}

module.exports = GameFeatures;
