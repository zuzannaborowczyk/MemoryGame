'use strict';

var view = (function () {
    var getInitialNumberOfPieces = function () {
        return Number(document.getElementById("numberOfPieces").value);
    },

        renderTiles = function(currentNumberOfPieces) {

            var tileContainer = document.getElementById("tileContainer");
            while (tileContainer.firstChild) {
                tileContainer.removeChild(tileContainer.firstChild);
            }


            for(var i=0; i<currentNumberOfPieces; i++) {
                var tile = document.createElement("div");
                tile.setAttribute("class", "tile");
                tile.setAttribute("id", i+1);
                tile.setAttribute("onclick", "controller.checkTile("+(i+1)+")");
                document.getElementById("tileContainer").appendChild(tile);
            }
        },

        showTilesToGuess = function() {
        var piecesToHighlight = game.getPiecesToHighlight();
        return document.getElementById("piecesToHighlight").value;

        },
        blockButtons = function() {
        document.getElementById("startButton").classList.add("disabled");
        document.getElementById("highlightButton").classList.add("disabled");
        document.getElementById("numberOfPieces").classList.add("disabled");


        },
        unblockButtons = function() {
            document.getElementById("startButton").classList.remove("disabled");
            document.getElementById("highlightButton").classList.remove("disabled");
            document.getElementById("numberOfPieces").classList.remove("disabled");


        },

        highlightTile = function(i) {

            document.getElementById(i).classList.add("toGuess");



        },

        unhighlightTiles = function(piecesToHighlight, highlightTime) {

        setTimeout(function() {for (var i = 0; i < piecesToHighlight.length; i++) {
            document.getElementById(piecesToHighlight[i]).setAttribute("class", "tile");
            makeTilesClickable();
            unblockButtons();

        }}, highlightTime);
        },

        disableTiles = function() {
        document.getElementById('tileContainer').setAttribute("class", "disabled");
        },
        makeTilesClickable = function() {
        document.getElementById('tileContainer').setAttribute("class", "container");

        var piecesList = document.getElementById('tileContainer').children;

        for(var i =0; i<piecesList.length;i++){
            piecesList[i].classList.add("clickableTile");
        }


       },
        highlightCorrect = function (tileId) {
        document.getElementById(tileId).setAttribute("class", "correct");
        },
        highlightWrong = function (tileId) {
        document.getElementById(tileId).classList.add("wrong");
        };




    return {'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'highlightTile': highlightTile,
        'unhighlightTiles': unhighlightTiles,
        'highlightCorrect': highlightCorrect,
        'highlightWrong': highlightWrong,
        'blockButtons': blockButtons,
        'unblockButtons': unblockButtons,
        'renderTiles': renderTiles,
        'disableTiles': disableTiles,
        'makeTilesClickable': makeTilesClickable,
        'showTilesToGuess': showTilesToGuess

    }
})();