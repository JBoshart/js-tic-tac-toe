function TicTacToe(callback) {
  this._player_X = 'X'
  this._player_O = 'O'
  this._plays = 0
  this._current_player = this._player_X
  this._gameboard = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i'
  }
}

TicTacToe.prototype.makePlay = function(spot) {
  this._plays++

  if ((this._gameboard[spot] !== 'X') && (this._gameboard[spot] !== 'O')) {
    this._gameboard[spot] = this._current_player
  } else {
    return alert("This space has already been played!")
  }

  var result = this.hasWon()

  if (result === true) {
    var winner = this._current_player
    this.turnSwitch()
    var loser = this._current_player

    $('.' + loser).switchClass(loser, winner)
    $('.play').switchClass('play', winner)

  } else if ((result === false) && (this._plays === 9)) {
    $('.X').switchClass('X', 'C')
    $('.O').switchClass('O', 'C')
  } else {
    this.turnSwitch()
  }
}

TicTacToe.prototype.hasWon = function() {
  var board = this._gameboard

  if ((board[1] === board[2]) && (board[1] === board[3])) {
    return true
  } else if ((board[4] === board[5]) && (board[4] === board[6])) {
    return true
  } else if ((board[7] === board[8]) && (board[7] === board[9])) {
    return true
  } else if ((board[1] === board[4]) && (board[1] === board[7])) {
    return true
  } else if ((board[2] === board[5]) && (board[2] === board[8])) {
    return true
  } else if ((board[3] === board[6]) && (board[3] === board[9])) {
    return true
  } else if ((board[1] === board[5]) && (board[1] === board[9])) {
    return true
  } else if ((board[3] === board[5]) && (board[3] === board[7])) {
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
    $(this).switchClass('play', ttt._current_player)

    ttt.makePlay(button, ttt._current_player)

  })
})
