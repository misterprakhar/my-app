export const Square = ({ value, onSquareClick, showValue }) => {
	return (
		<button id={`${showValue}`} className={`square ${showValue}`} onClick={onSquareClick}>
			{value}
		</button>
	);
};
