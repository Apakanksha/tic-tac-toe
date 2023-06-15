let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let currentPlayer = 'X';
  
  function makeMove(row, col) {
    if (board[row][col] === '') {
      board[row][col] = currentPlayer;
      document.getElementById('tic-tac-toe-board').children[row].children[col].innerText = currentPlayer;
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }
  
  function resetGame() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
  }
  