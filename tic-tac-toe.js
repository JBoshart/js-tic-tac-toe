function TicTacToe() {
  this._player_X = 'X'
  this._player_O = 'O'
  this._current_player = this._player_X
  this._gameboard = {
    top_row: [[],[],[]]
    middle_row: [[],[],[]]
    bottom_row: [[],[],[]]
  }

// This is eventually going to be a 'start new game' or reset button.
  // this.newGame = function(event) {
  //   new TicTacToe
  // }

  // how are win conditions stored? Are they stored?

}

TicTacToe.prototype.makePlay = function() {
  // finds button selected
  // finds current player
  // inputs correct letter (X or O) into correct gameboard storage
  // calls win? function
  // switches current player if game is not a win or Cat's Game
}

TicTacToe.prototype.hasWon = function() {
  // checks gameboard in all combinations to see if win condition has been met. (_NOTE: Probably only needs to check win conditions that contain the current square being played. Checking all combinations is redundant work.)
  // returns true if player has won
    // How to we indicate that in the view?
  // returns false if player has not won
    // How to handle Cat's Game? Should the function call Cat's Game after all possible plays have been made (meaning, all 9 squares are assigned to X or O), OR after it sees that it is not possible for either player to win (which you can see after 7 turns have been played? I think?)
}


// Things to think about re: What constitutes a turn?
  // Computer must determine which player's turn it is
  // Select a space
    // Is a space available?
    // Is the space adventagous?
  // Claim space using player identifier
  // Check win/loss/draw state
    // what is a win?
    // what is a draw?
    // what is a loss?
    // comminucate outcome
  // continue play?

  $(document).ready(function() {

    var ttt = new TicTacToe


  // For eventual newgame/reset funcionality discribed above.
    // $('.game-control .new-game').on('mousedown', newGame)
  })
