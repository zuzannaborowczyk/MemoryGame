describe('Game', function() {
    it('should have 4 pieces after game start', function () {
        var pieces;
        game.startGame();

        pieces = game.getPieces();
        expect(pieces.length).toBe(4);
    });
it('one piece should be to guess after game start', function () {
    var piecesToGuess;

    game.startGame(4);
    game.getPieces();
    piecesToGuess = game.getPiecesToHighlight();
    expect(piecesToGuess.length).toBe(1);
});

    it('two pieces should be to guess when 6 pieces', function () {
        var piecesToGuess;

        game.startGame(6);
        game.getPieces();
        piecesToGuess = game.getPiecesToHighlight();
        expect(piecesToGuess.length).toBe(2);
    });

    it('three pieces should be to guess when 8 pieces', function () {
        var piecesToGuess;

        game.startGame(8);
        game.getPieces();
        piecesToGuess = game.getPiecesToHighlight();
        expect(piecesToGuess.length).toBe(3);
    });

it('should start game with chosen number of pieces', function () {
    var pieces;

    game.startGame(6);
    pieces = game.getPieces();
    expect(pieces.length).toBe(6);
});

it('should give info about correct tile', function() {

    game.startGame(6);
    var tileToGuess = game.getPiecesToHighlight()[1];

    //act
    var result = game.checkTile(tileToGuess);

    //assert
    expect(result).toBe("correctTile");
});
it('should give info about wrong tile', function() {

    game.startGame(10);
    var allPieces = game.getPieces();
    var piecesToGuess = game.getPiecesToHighlight();
    allPieces.splice(allPieces.indexOf(piecesToGuess[0]),1);
    allPieces.splice(allPieces.indexOf(piecesToGuess[1]),1);


    //act

    var result = game.checkTile(allPieces[1]);

    //assert
    expect(result).toBe("wrongTile");
});
it('should give error after double clicking the correct tile', function() {
    var configNumber = {
        numberOfPieces: 6
    };
    game.startGame(configNumber);
    var piecesToGuess = game.getPiecesToHighlight();


    //act

    game.checkTile(piecesToGuess[1]);
    var result = game.checkTile(piecesToGuess[1]);

    //assert
    expect(result).toBe("wrongTile");

});
it('should show end of level', function() {

    game.startGame(6);
    var piecesToGuess = game.getPiecesToHighlight();
    game.checkTile(piecesToGuess[0]);

    //act

    var result = game.checkTile(piecesToGuess[0]);

    //assert
    expect(result).toBe("endOfLevel");
});

it('should add 2 tiles after finished level', function () {

    game.startGame(4);
    var piecesToGuess = game.getPiecesToHighlight();
    var beginRenderedPieces = game.getCurrentNumberOfPieces();
    game.checkTile(piecesToGuess[0]);
    var newBoardOfPieces = game.getCurrentNumberOfPieces();
    //act

    //assert
    expect(newBoardOfPieces).toBe(beginRenderedPieces+2);

});


});

