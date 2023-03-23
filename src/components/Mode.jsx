import { useContext } from "react";
import { GameContext } from "../GameContext";
import { Game } from "./Game";

export const Mode = () => {
	const { mode, handleMode } = useContext(GameContext);

	if (mode) return <Game gameMode={mode} />;
	else {
		return (
			<div className="mode">
				<p>Choose Mode</p>
				<button className="cpu" onClick={(e) => handleMode(e)}>
					<img src="images/chatbot.png" alt="" />
					CPU
				</button>
				<button className="two-player" onClick={(e) => handleMode(e)}>
					<img src="images/competition.png" alt="" />2 Players
				</button>
			</div>
		);
	}
};
