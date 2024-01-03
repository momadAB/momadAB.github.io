function Cell(indexx) {
    const index = indexx;
    let state = null

    function resetCell() {
        state = null;
    }

    function setCell(cellState) {
        if (['X', 'O'].includes(cellState)) {
            state = cellState;
        }
    }

    function getState() {
        return state;
    }

    return {
        resetCell,
        setCell,
        getState,
    }
};

const Gameboard = (function() {
    let i = 0;
    const board = [];
    let gameOver = false  
    let player = 'X'; // Starts as X, then swaps between O and X for every play

    while (i < 9) {
        board.push(Cell(i));
        i++;
    }
    
    function showBoard() {
        return board.map(c => c.getState());
    }

    function resetBoard() {
        board.forEach(c => c.resetCell());
        gameOver = false;
    }

    function placeSymbol(index) {
        if (board[index].getState() == null) {
            board[index].setCell(player);
            swapPlayer();
            return true; // Succeeded
        }
        else {
            // console.log('Cell is not empty, choose another one')
            return false; // Failed
        }
    }

    function swapPlayer() {
        if (player == 'X') {
            player = 'O';
        }
        else {
            player = 'X';
        }
    }

    function getCurrentPlayer() {
        return player;
    }

    /** 
     * Returns null if nobody won, 'x' if x won, 'o' if o won
    */
    function checkWinner() {
        // Check all win possibilities
        const winningCombinations = [
            [0, 1, 2], // first row
            [3, 4, 5], // second row
            [6, 7, 8], // third row
            [0, 3, 6], // first column
            [1, 4, 7], // second column
            [2, 5, 8], // third column
            [0, 4, 8], // first diagonal
            [2, 4, 6]  // second diagonal
        ]
        
        for (let combination of winningCombinations) {
            if (board[combination[0]].getState() != null && 
            board[combination[0]].getState() === board[combination[1]].getState() && 
            board[combination[0]].getState() === board[combination[2]].getState()) {
                
                // console.log(board[combination[0]].getState());
                gameOver = true;
                return board[combination[0]].getState();
        }}

        return null;
    }


    function checkDraw() {
        // If every cell is filled and there is no winner
        if (board.every(c => c.getState() != null) && this.checkWinner() == null) {
            gameOver = true;
            return true;
        }
        else {
            return false;
        }
    }

    return {
        showBoard,
        resetBoard,
        placeSymbol,
        getCurrentPlayer,
        checkWinner,
        checkDraw,
    }
})();

// console.log(Gameboard.showBoard());

const GameboardController = (function() {

    /**
     * Checks if the game has ended and handles the DOM accordingly
     */
    function handleEnd() {
        const status = document.getElementById('status');
        console.log(Gameboard.checkDraw());
        status.innerText = Gameboard.checkDraw() ? 'Draw!' : '';
        status.innerText = Gameboard.checkWinner() != null ? `${Gameboard.checkWinner()} wins!` : status.innerText

        // Return false if the game has not ended
        return status.innerText == '' ? false : true
    }

    function showState() {
      const boardState = Gameboard.showBoard();
    //   boardState;
      let i = 0;
      while (i < 9) {
        showCell(boardState[i], i);
        i++;
      }
      GameboardController.handleEnd();
    }

    function showCell(cellState, index) {
        index += 1;
        const cellDiv = document.getElementById(`cell${index}`);
        cellDiv.innerHTML = '';
        const text = document.createElement('button');
        text.classList.add('cell');

        // text.innerText = `${cellState}`;
        text.innerText = cellState == null ? '' : cellState;

        text.onclick = () => {
            if (!GameboardController.handleEnd()) {
                Gameboard.placeSymbol(index - 1);
                GameboardController.showState();
            }
        };
        
        // console.log(cellState);
        cellDiv.appendChild(text);
    }

    return {
        showState,
        showCell,
        handleEnd,
    }
  })();


// Gameboard.placeSymbol(1);
GameboardController.showState();

document.getElementById('resetButton').onclick = () => {
    Gameboard.resetBoard();
    GameboardController.showState();
}

// export { Gameboard };   