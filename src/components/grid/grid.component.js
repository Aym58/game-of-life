const Grid = (props) => {
	return (
		<div className='grid-wrapper'>
			<div className='grid'>
				{props.matrix.map((el, i) => {
					return el ? (
						<div
							key={i}
							className='cell alive'
							onClick={() => props.onChangeHandler(i)}
						></div>
					) : (
						<div
							key={i}
							className='cell'
							onClick={() => props.onChangeHandler(i)}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default Grid;
