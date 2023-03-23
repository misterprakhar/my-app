import { useContext } from "react";
import { Board } from "./Board";
import { GameContext } from "../GameContext";

export const Game = ({ gameMode }) => {
	const { history, currentMove, calculateWinner, handlePlay, jumpTo, restart, changeMode } = useContext(GameContext);
	const currentSquares = history[currentMove];
	const xIsNext = currentMove % 2 === 0;

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	const winner = calculateWinner(currentSquares);

	return (
		<div className="game">
			<div className="game-play">
				<div className="status">
					{winner ? "Winner: " : currentMove === 9 ? "DRAW" : "Next player: "}{" "}
					<span>{winner ? winner : currentMove === 9 ? "" : xIsNext ? "X" : "O"}</span>
				</div>
				<div className="game-board">
					<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={winner} />
				</div>
			</div>
			<div className="game-info">
				<div className="game-moves">
					<ol>{moves}</ol>
				</div>
				<div className="game-buttons">
					<button className="restart-btn" onClick={restart}>
						Restart
					</button>
					<button className="reset-btn" onClick={changeMode}>
						Change Mode
					</button>
				</div>
			</div>
		</div>
	);
};
