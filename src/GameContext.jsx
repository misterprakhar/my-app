import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const [mode, setMode] = useState();

	function cpuMove(nextSquares) {
		let cpuSquares = nextSquares.slice();
		let i;
		do {
			i = Math.floor(Math.random() * 9);
		} while (cpuSquares[i]);
		cpuSquares[i] = "O";
		return cpuSquares;
	}

	function handlePlay(nextSquares) {
		let nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		if (currentMove < 8 && !calculateWinner(nextSquares) && mode === "cpu") {
			setTimeout(() => {
				nextHistory = [...history.slice(0, currentMove + 1), nextSquares, cpuMove(nextSquares)];
				setHistory(nextHistory);
				setCurrentMove(nextHistory.length - 1);
			}, 1000);
		}
	}

	function handleMode(e) {
		setMode(e.target.className);
	}

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
		return null;
	};

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
	}

	function restart() {
		setHistory([Array(9).fill(null)]);
		setCurrentMove(0);
	}

	function changeMode() {
		setHistory([Array(9).fill(null)]);
		setCurrentMove(0);
		setMode();
	}

	return (
		<GameContext.Provider
			value={{ history, currentMove, mode, calculateWinner, handlePlay, handleMode, jumpTo, restart, changeMode }}
		>
			{children}
		</GameContext.Provider>
	);
};
