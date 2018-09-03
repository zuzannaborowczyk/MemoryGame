'use strict';

var controller = function () {
    var startGame = function (config) {
            var gameBegin;
            if (!config) {
                config = view.getInitialNumberOfPieces()
            }
            gameBegin = game.startGame(config);
            var piecesToHighlight = game.getPiecesToHighlight();
            view.renderTiles(gameBegin);

           view.blockButtons();

            for (var i = 0; i < piecesToHighlight.length; i++) {
                view.highlightTile(piecesToHighlight[i]);
            }
            view.unblockButtons();
            view.unhighlightTiles(piecesToHighlight, 2000);

        },
        gameBegin = function() {
        game.zeroStart();
        var piecesToHighlight = game.getPiecesToHighlight();
        view.renderTiles(4);
            for (var i = 0; i < piecesToHighlight.length; i++) {
                view.highlightTile(piecesToHighlight[i]);
            }
            view.unhighlightTiles(piecesToHighlight, 2000);
        },

        checkTile = function (tileId) {
            var numberOfTiles = game.getCurrentNumberOfPieces(),
                result = game.checkTile(tileId);
            if (result === 'correctTile') {

                view.highlightCorrect(tileId);

            }
            if (result === 'endOfLevel') {
                var newNumberOfTiles = numberOfTiles + 2;
                view.highlightCorrect(tileId);
                var config = newNumberOfTiles;


                setTimeout(function () {
                    startGame(config)
                }, 700);
            }


            if (result === 'wrongTile') {
                view.highlightWrong(tileId);
                var config = numberOfTiles;

                setTimeout(function () {
                    startGame(config)
                }, 700);

            }
        },
        showTilesToGuess = function () {
            view.showTilesToGuess();
        };



    return {
        'startGame': startGame,
        'checkTile': checkTile,
        'gameBegin': gameBegin,
        'showTilesToGuess': showTilesToGuess
    }

}();