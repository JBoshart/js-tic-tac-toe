function TicTacToe(callback) {
  this._player_X = 'X'
  this._player_O = 'O'
  this._plays = 0
  this._current_player = this._player_X
  this._gameboard = {
    'top_row': [[],[],[]],
    'middle_row': [[],[],[]],
    'bottom_row': [[],[],[]]
  }
}

TicTacToe.prototype.makePlay = function(spot) {
  this._plays++
  var board = this._gameboard
  var row = spot.charAt(0)
  var col = spot.charAt(1)

  if (row === 't') {
    if (this._gameboard['top_row'][0][col] === undefined) {
      this._gameboard['top_row'][0][col] = this._current_player
    } else {
      return alert("This space has already been played!")
    }
  } else if (row === 'm') {
    if (this._gameboard['middle_row'][0][col] === undefined) {
      this._gameboard['middle_row'][0][col] = this._current_player
    } else {
      return alert("This space has already been played!")
    }
  } else if (row === 'b') {
    if (this._gameboard['bottom_row'][0][col] === undefined) {
      this._gameboard['bottom_row'][0][col] = this._current_player
    } else {
      return alert("This space has already been played!")
    }
  }

  var result = this.hasWon(row, col)

  if (result === true) {
    alert("Yay")
    // Do other stuff:
      // Mark win
      // Prompt to start new game
  } else if ((result === false) && (this._count === 9)) {
    // Mark Cat's game
    // Prompt to start new game
  } else {
    this.turnSwitch()
  }
}

TicTacToe.prototype.hasWon = function(row, col) {
  var top = this._gameboard['top_row'][0]
  var mid = this._gameboard['middle_row'][0]
  var bot = this._gameboard['top_row'][0]

  if (top[0] === (top[1] === top[2])) {
    return true
  } else if (mid[0] === (mid[1] === mid[2])) {
    return true
  } else if (bot[0] === (bot[1] === bot[2])) {
    return true
  } else if (top[0] === (mid[0] === bot[0])) {
    return true
  } else if (top[1] === (mid[1] === bot[1])) {
    return true
  } else if (top[2] === (mid[2] === bot[2])) {
    return true
  } else if (top[0] === (mid[1] === bot[2])) {
    return true
  } else if (top[2] === (mid[1] === bot[0])) {
    return true
  } else {
    return false
  }
}

TicTacToe.prototype.turnSwitch = function () {
  if (this._current_player === this._player_X) {
    this._current_player = this._player_O
  } else {
    this._current_player = this._player_X
  }
}

$(document).ready(function() {

  var ttt = new TicTacToe

  $('.play').mousedown(function(event) {
    var button = $(this).data('grid')
    ttt.makePlay(button)
  })
})
