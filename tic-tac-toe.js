function TicTacToe(callback) {
  this._player_X = 'X'
  this._player_O = 'O'
  this._current_player = this._player_X
  this._gameboard = {
    'top_row': [[],[],[]],
    'middle_row': [[],[],[]],
    'bottom_row': [[],[],[]]
  }
}

TicTacToe.prototype.makePlay = function(spot) {
  var board = this._gameboard
  var row = spot.charAt(0)
  var col = spot.charAt(1)

  if (row === 't') {
    if (this._gameboard['top_row'][0][col] === undefined) {
      this._gameboard['top_row'][0][col] = this._current_player
    }
  } else if (row === 'm') {
    if (this._gameboard['middle_row'][0][col] === undefined) {
      this._gameboard['middle_row'][0][col] = this._current_player
    }
  } else if (row === 'b') {
    if (this._gameboard['bottom_row'][0][col] === undefined) {
      this._gameboard['bottom_row'][0][col] = this._current_player
    }
  }
  //   // calls win? function
  //   // switches current player if game is not a win or Cat's Game
}


TicTacToe.prototype.hasWon = function() {
  // checks gameboard in all combinations to see if win condition has been met. (_NOTE: Probably only needs to check win conditions that contain the current square being played. Checking all combinations is redundant work.)
  // returns true if player has won
    // How to we indicate that in the view?
  // returns false if player has not won
    // How to handle Cat's Game? Should the function call Cat's Game after all possible plays have been made (meaning, all 9 squares are assigned to X or O), OR after it sees that it is not possible for either player to win (which you can see after 7 turns have been played? I think?)
}

$(document).ready(function() {

  var ttt = new TicTacToe

  $('.play').mousedown(function(event) {
    var button = $(this).data('grid')
    ttt.makePlay(button)
  })
})
