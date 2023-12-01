
import React, { useState } from 'react';
import {ReactComponent as Logo} from '../assets/refresh-ccw.svg';

function TicTacToe() {
    const placeholder = <span className='text-black text-opacity-50'>-</span>
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
  
    const handleClick = (i) => {
      const newBoard = [...board];
      if (calculateWinner(board) || newBoard[i]) return;
      newBoard[i] = xIsNext ? 'X' : 'O';
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    };
  
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      if (squares.every((square) => square !== null)) {
        return 'Tie';
      }
      return null;
    };
  
    
    const renderSquare = (i) => {
      return (
        <button className="square w-auto" onClick={() => handleClick(i)}>
          {board[i] ? board[i] : placeholder}
        </button>
      );
    };
  
    const winner = calculateWinner(board);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else if (winner === 'Tie') {
      status = 'It\'s a Tie!';
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  
    const handleReset = () => {
      setBoard(Array(9).fill(null));
      setXIsNext(true);
    };
  
    return (
      <div className="flex flex-col w-48">
        <div className="status flex justify-center">{status}</div>
        <div className="grid grid-cols-3 board-row w-auto">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid grid-cols-3 board-row w-auto">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid grid-cols-3 board-row w-auto">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="reset flex flex-row justify-center" onClick={handleReset}>
          <Logo className='logo' />
          <span>&nbsp;&nbsp;</span>
          Reset
        </button>
      </div>
    );
  }
  
  export default TicTacToe;
