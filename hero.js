        /*

          The only function that is required in this file is the "move" function

          You MUST export the move function, in order for your code to run
          So, at the bottom of this code, keep the line that says:

          module.exports = move;

          The "move" function must return "North", "South", "East", "West", or "Stay"
          (Anything else will be interpreted by the game as "Stay")

          The "move" function should accept two arguments that the website will be passing in:
            - a "gameData" object which holds all information about the current state
              of the battle

            - a "helpers" object, which contains useful helper functions
              - check out the helpers.js file to see what is available to you

            (the details of these objects can be found on javascriptbattle.com/#rules)

          This file contains four example heroes that you can use as is, adapt, or
          take ideas from and implement your own version. Simply uncomment your desired
          hero and see what happens in tomorrow's battle!

          Such is the power of Javascript!!!

        */

        var LocalHero = {

            prevHealth : 100,
            prevKills : 0,
            currentAction : 'Hero',

            move : function(gameData, helpers) {

                var myHero = gameData.activeHero;

                  if ( myHero.health < 60 )
                  {
                      this.currentAction = 'Health' ;
                  }

                  if ( myHero.health > 60 )
                  {
                      this.currentAction = 'Hero';
                  }

                  var rval = '';

                  if (this.currentAction == 'Hero')
                  {
                      rval =  helpers.findNearestWeakerEnemy(gameData);
                  }

                  if ( this.currentAction == "Health")
                  {
                      rval =  helpers.findNearestHealthWell(gameData);
                  }

                  if (!rval ||  rval === '' )
                  {
                      rval = helpers.findNearestHealthWell(gameData);
                  }

                  return rval;

            }

        }

        var move = function(gameData, helpers) {
            return LocalHero.move(gameData, helpers);
        };


        // Export the move function here
        module.exports = move;
