import { useContext } from "react";
import { Square } from "./Square";
import { GameContext } from "../GameContext";

export const Board = ({ xIsNext, squares, onPlay, winner }) => {
	const { mode, currentMove } = useContext(GameContext);

	function handleClick(i) {
		if (winner || squares[i]) {
			return;
		}
		if (mode === "cpu" && currentMove % 2 === 1) return;
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
		// if (mode === "cpu")
		// 	setTimeout(() => {
		// 		cpuMove();
		// 	}, 1000);
	}

	function handleSquareValue(i) {
		if (!winner) {
			if (squares[i]) return squares[i];
			if (mode === "cpu" && currentMove % 2 === 1) return;
			if (xIsNext) return "X";
			return "O";
		} else {
			if (squares[i]) return squares[i];
		}
	}

	function handleSquareVisibility(i) {
		if (squares[i]) return "show";
		return "hidden";
	}

	return (
		<>
			<div className="board">
				<div className="board-row">
					<Square
						value={handleSquareValue(0)}
						showValue={handleSquareVisibility(0)}
						onSquareClick={() => handleClick(0)}
						handleSquareVisibility={() => handleSquareVisibility(0)}
					/>
					<Square
						value={handleSquareValue(1)}
						showValue={handleSquareVisibility(1)}
						onSquareClick={() => handleClick(1)}
						handleSquareVisibility={() => handleSquareVisibility(1)}
					/>
					<Square
						value={handleSquareValue(2)}
						showValue={handleSquareVisibility(2)}
						onSquareClick={() => handleClick(2)}
						handleSquareVisibility={() => handleSquareVisibility(2)}
					/>
				</div>
				<div className="board-row">
					<Square
						value={handleSquareValue(3)}
						showValue={handleSquareVisibility(3)}
						onSquareClick={() => handleClick(3)}
						handleSquareVisibility={() => handleSquareVisibility(3)}
					/>
					<Square
						value={handleSquareValue(4)}
						showValue={handleSquareVisibility(4)}
						onSquareClick={() => handleClick(4)}
						handleSquareVisibility={() => handleSquareVisibility(4)}
					/>
					<Square
						value={handleSquareValue(5)}
						showValue={handleSquareVisibility(5)}
						onSquareClick={() => handleClick(5)}
						handleSquareVisibility={() => handleSquareVisibility(5)}
					/>
				</div>
				<div className="board-row">
					<Square
						value={handleSquareValue(6)}
						showValue={handleSquareVisibility(6)}
						onSquareClick={() => handleClick(6)}
						handleSquareVisibility={() => handleSquareVisibility(6)}
					/>
					<Square
						value={handleSquareValue(7)}
						showValue={handleSquareVisibility(7)}
						onSquareClick={() => handleClick(7)}
						handleSquareVisibility={() => handleSquareVisibility(7)}
					/>
					<Square
						value={handleSquareValue(8)}
						showValue={handleSquareVisibility(8)}
						onSquareClick={() => handleClick(8)}
						handleSquareVisibility={() => handleSquareVisibility(8)}
					/>
				</div>
			</div>
		</>
	);
};
