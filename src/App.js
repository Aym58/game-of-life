import './App.css';
import { useState, useEffect } from 'react';
import Menu from './components/menu/menu.component';
import Grid from './components/grid/grid.component';
import {
	matrix,
	setDataToEngine,
	runLife,
	reset,
	setPattern,
} from './engine/engine';
import { DEFAULT_INTERVAL } from './config';

function App() {
	const [cells, setCells] = useState(matrix);
	const [run, setRun] = useState(false);
	const [speed, setSpeed] = useState(DEFAULT_INTERVAL);

	const onSetCells = (index) => {
		setDataToEngine(index);
		setCells(matrix.slice());
	};

	const onStart = () => {
		setRun(!run);
	};

	const onClear = () => {
		reset();
		setCells(matrix.slice());
	};

	const onChangeSpeed = (event) => {
		const time = +event.target.value;
		setSpeed(time);
	};

	useEffect(() => {
		setPattern();
		setCells(matrix.slice());
	}, []);

	useEffect(() => {
		if (run) {
			const interval = setInterval(() => {
				runLife();
				setCells(matrix.slice());
			}, speed);
			return () => clearInterval(interval);
		}
	}, [run, speed]);

	return (
		<div className='App'>
			<Menu
				runState={run}
				onStartHandler={onStart}
				onClearHandler={onClear}
				onSpeedHandler={onChangeSpeed}
				speed={speed}
			/>
			<Grid matrix={cells} onChangeHandler={onSetCells} />
		</div>
	);
}

export default App;
