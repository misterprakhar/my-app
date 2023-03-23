import "./App.css";
import { Mode } from "./components/Mode";
import { GameContextProvider } from "./GameContext";

const App = () => {
	return (
		<main>
			<GameContextProvider>
				<Mode />
			</GameContextProvider>
		</main>
	);
};

export default App;
