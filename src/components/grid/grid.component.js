const arr = [];
for (let i = 0; i < 2500; i++) {
	arr[i] = '1';
}

const Grid = (props) => {
	return (
		<div className='grid-wrapper'>
			<div className='grid'>
				{arr.map((el, i) => {
					return <div key={i} className='cell'></div>;
				})}
			</div>
		</div>
	);
};

export default Grid;
