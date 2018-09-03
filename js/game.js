'use strict';

var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces, tilesToGuess = [], countGoodAnswers = 0,
        startGame = function (configNumber) {

            if (configNumber) {
                currentNumberOfPieces = configNumber;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
            return currentNumberOfPieces;
        },

        zeroStart=function(){

        startGame(4);
        },

        getPieces = function () {
            var i,
                pieces = [];
            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
            }

            return pieces;
        },
        getPiecesToHighlight = function () {
            var numToHighlight = Math.floor(currentNumberOfPieces / 2) - 1;
            tilesToGuess = [];
            for (var i = 0; i < numToHighlight; i++) {
                var randomNum = Math.floor((Math.random() * currentNumberOfPieces)) + 1;

                while (tilesToGuess.indexOf(randomNum) > -1) {
                    randomNum = Math.floor((Math.random() * currentNumberOfPieces)) + 1;
                }

                tilesToGuess.push(randomNum);

            }
            return tilesToGuess;

        },
        checkTile = function (tileId) {
            if (tilesToGuess.indexOf(tileId) != -1) {
                countGoodAnswers++;
                tilesToGuess.splice(tilesToGuess.indexOf(tileId), 1);
                if (tilesToGuess.length===0) {
                    countGoodAnswers = 0;
                    levelUp();
                    return 'endOfLevel';
                }

                return 'correctTile';
            } else {
                return 'wrongTile';
            }

        },
        levelUp = function () {
            currentNumberOfPieces = currentNumberOfPieces + 2;


        },
        getCurrentNumberOfPieces = function () {
            return currentNumberOfPieces;
        };

    return {
        'startGame': startGame,
        'zeroStart': zeroStart,
        'getPieces': getPieces,
        'getPiecesToHighlight': getPiecesToHighlight,
        'checkTile': checkTile,
        'levelUp': levelUp,
        'getCurrentNumberOfPieces': getCurrentNumberOfPieces

    }
})();