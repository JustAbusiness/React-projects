import React, { useState } from 'react';
import { calculateWinner } from '../../Helper';
import Board from './Board';
import "./GameStyle.css";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board]        // Tạo 1 bảng clone  ko làm ảnh hưởng đến ban đầu
        if (winner || boardCopy[index]) return;       // Nếu có người chiến thắng hoặc ô đó đã chọn thì ko đc nhấn nữa
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);       // Update lại board 
        setxIsNext(!xIsNext);     // Nếu đã chọn X trước thì tiếp theo phải là O và ng lại
    };

    const handleResetGame = () => {         // Reset game 
        setBoard(Array(9).fill(null));
        setxIsNext(true);       // Set "X" là mặc định đi trước 
    }


    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <button onClick={handleResetGame}> Reset Game</button>
        </div>
    );
};

export default Game;