const board = [['', '', ''], ['', '', ''], ['', '', '']];

let currentPlayer = 'X';
let gameOver = false;

function checkWinner() {
  for (let i = 0; i < 3; i++) {

    if (
      (board[i][0] === currentPlayer &&
        board[i][1] === currentPlayer &&
        board[i][2] === currentPlayer) ||
      (board[0][i] === currentPlayer &&
        board[1][i] === currentPlayer &&
        board[2][i] === currentPlayer)) {
      return true;
    }        
  }
  if (
    (board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer) ||
    (board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer)
  ) {
    return true;
  }
   else {
    return false;
  }
}

function checkTie() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}

function play(row, col) {

  if (!gameOver && board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementById('board').children[row * 3 + col].innerHTML = currentPlayer;

    if (checkWinner()) {
      document.getElementById('winner').innerHTML = currentPlayer + ' venceu!';
      gameOver = true;
    } else if (checkTie()) {
      document.getElementById('winner').innerHTML = 'Empate!';
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function reset() {
  // Limpar a matriz
  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
      board[i][j] = "";
    }

  }
  // Limpar o tabuleiro na página
  const cell = document.getElementById("board").children;
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
  }
  // // Resetar o winner
  document.getElementById('winner').innerHTML = '';
  gameOver = false;

}     