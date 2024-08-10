import React, { useState, useEffect } from 'react';
import { Button, Typography, Paper } from '@mui/material';
import '../../public/Style/Bubblesort.css'; // Import the CSS file

const isSorted = (arr) => arr.every((val, i, array) => !i || array[i - 1] <= val);

const checkWin = (grid) => {
  const checkLine = (line) => line.every(val => val !== null && val === line[0]);

  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (checkLine(grid[i])) return { winner: grid[i][0] === 1 ? 'User' : 'Computer', line: ['row', i] };
    if (checkLine(grid.map(row => row[i]))) return { winner: grid[0][i] === 1 ? 'User' : 'Computer', line: ['col', i] };
  }

  // Check diagonals
  if (checkLine([grid[0][0], grid[1][1], grid[2][2]])) return { winner: grid[1][1] === 1 ? 'User' : 'Computer', line: ['diag1'] };
  if (checkLine([grid[0][2], grid[1][1], grid[2][0]])) return { winner: grid[1][1] === 1 ? 'User' : 'Computer', line: ['diag2'] };

  return null;
};

const getAvailableMoves = (grid) => {
  const moves = [];
  grid.forEach((row, rIndex) => row.forEach((val, cIndex) => {
    if (val === null) {
      moves.push([rIndex, cIndex]);
    }
  }));
  return moves;
};

const minimax = (grid, depth, isMaximizing) => {
  const scores = { 1: -10, 9: 10, draw: 0 };
  const result = checkWin(grid);
  if (result) return scores[result.winner === 'User' ? 1 : 9];

  const availableMoves = getAvailableMoves(grid);
  if (availableMoves.length === 0) return scores.draw;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (const [row, col] of availableMoves) {
      grid[row][col] = 9;
      const score = minimax(grid, depth + 1, false);
      grid[row][col] = null;
      bestScore = Math.max(score, bestScore);
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (const [row, col] of availableMoves) {
      grid[row][col] = 1;
      const score = minimax(grid, depth + 1, true);
      grid[row][col] = null;
      bestScore = Math.min(score, bestScore);
    }
    return bestScore;
  }
};

const getBestMove = (grid, isUser) => {
  const bestMove = [];
  let bestScore = isUser ? Infinity : -Infinity;

  const availableMoves = getAvailableMoves(grid);

  for (const [row, col] of availableMoves) {
    grid[row][col] = isUser ? 1 : 9;
    const score = minimax(grid, 0, !isUser);
    grid[row][col] = null;

    if (isUser ? score < bestScore : score > bestScore) {
      bestScore = score;
      bestMove[0] = row;
      bestMove[1] = col;
    }
  }

  return bestMove;
};

const TictoeSort = () => {
  const [grid, setGrid] = useState(Array(3).fill().map(() => Array(3).fill(null)));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!isUserTurn && !winner && !gameOver) {
      const [row, col] = getBestMove(grid, false);
      handleClick(row, col, false);
    }
  }, [isUserTurn, grid, winner, gameOver]);

  const handleClick = (row, col, isUser = true) => {
    if (grid[row][col] || winner) return;

    const newGrid = grid.map((r, rIndex) => r.map((val, cIndex) => {
      if (rIndex === row && cIndex === col) {
        return isUser ? 1 : 9;
      }
      return val;
    }));

    setGrid(newGrid);

    const result = checkWin(newGrid);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      setGameOver(true);
    } else if (getAvailableMoves(newGrid).length === 0) {
      setGameOver(true);
    } else {
      setIsUserTurn(!isUser);
    }
  };

  const resetGame = () => {
    setGrid(Array(3).fill().map(() => Array(3).fill(null)));
    setIsUserTurn(true);
    setWinner(null);
    setWinningLine(null);
    setGameOver(false);
  };

  const startGame = () => {
    alert('Welcome to Tic-Tac-Sort! You will play against the computer. Your goal is to sort a row, column, or diagonal. You play as 1, and the computer plays as 9.');
  };

  const getLineStyle = (line) => {
    if (!line) return {};
    const size = '100px';
    if (line[0] === 'row') return { 
      gridRow: `${line[1] + 1} / ${line[1] + 2}`, 
      border: `3px solid red`,
      position: 'absolute',
      left: 0,
      right: 0,
      top: `${line[1] * 100}px`,
      height: '3px',
      zIndex: 1,
      transition: 'all 0.5s ease-out'
    };
    if (line[0] === 'col') return { 
      gridColumn: `${line[1] + 1} / ${line[1] + 2}`, 
      border: `3px solid red`,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: `${line[1] * 100}px`,
      width: '3px',
      zIndex: 1,
      transition: 'all 0.5s ease-out'
    };
    if (line[0] === 'diag1') return { 
      border: `3px solid red`,
      position: 'absolute',
      top: 0,
      left: 0,
      height: '3px',
      width: '300px',
      transform: 'rotate(45deg)',
      transformOrigin: 'top left',
      zIndex: 1,
      transition: 'all 0.5s ease-out'
    };
    if (line[0] === 'diag2') return { 
      border: `3px solid red`,
      position: 'absolute',
      top: 0,
      right: 0,
      height: '3px',
      width: '300px',
      transform: 'rotate(-45deg)',
      transformOrigin: 'top right',
      zIndex: 1,
      transition: 'all 0.5s ease-out'
    };
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', position: 'relative', width: '320px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>Tic-Tac-Sort</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={startGame}
        style={{ marginBottom: '20px' }}
      >
        Start Game
      </Button>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 100px)', 
        gap: '10px', 
        justifyContent: 'center', 
        position: 'relative'
      }}>
        {grid.map((row, rIndex) => row.map((value, cIndex) => (
          <Paper
            key={`${rIndex}-${cIndex}`}
            onClick={() => isUserTurn && handleClick(rIndex, cIndex)}
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              cursor: isUserTurn && !value && !winner ? 'pointer' : 'default',
              backgroundColor: value ? (value === 1 ? 'lightblue' : 'lightcoral') : 'white',
              position: 'relative'
            }}
          >
            {value}
            {winner && winningLine && <div style={getLineStyle(winningLine)} />}
          </Paper>
        )))}
      </div>
      {winner && (
        <Typography variant="h5" color="primary" style={{ marginTop: '20px' }}>
          {winner} Wins!
        </Typography>
      )}
      {!winner && gameOver && (
        <Typography variant="h5" color="textSecondary" style={{ marginTop: '20px' }}>
          It's a Draw!
        </Typography>
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={resetGame}
        style={{ marginTop: '20px' }}
      >
        Reset Game
      </Button>
    </div>
  );
};

export default TictoeSort;
