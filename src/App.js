import './App.css';
import { useState, useEffect } from 'react';
import Menu from './components/menu/menu.component';
import Grid from './components/grid/grid.component';
import About from './components/about/about.component';
import {
	matrix,
	setDataToEngine,
	setPatternToEngine,
	runLife,
	reset,
} from './engine/engine';
import { DEFAULT_INTERVAL } from './config';
import patterns from './patterns';

function App() {
	const [cells, setCells] = useState(matrix);
	const [run, setRun] = useState(false);
	const [speed, setSpeed] = useState(DEFAULT_INTERVAL);
	const [showAbout, setShowAbout] = useState(false);

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

	const onAboutHandler = () => {
		setShowAbout(!showAbout);
	};

	const setPatternHandler = (pattern) => {
		onClear();
		if (pattern === 'glider') setPatternToEngine(patterns.glider);
		if (pattern === 'spaceship') setPatternToEngine(patterns.spaceship);
		if (pattern === 'pulsar') setPatternToEngine(patterns.pulsar);
		setCells(matrix.slice());
	};

	useEffect(() => {
		onClear();
		setPatternToEngine(patterns.glider);
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
				onAboutHandler={onAboutHandler}
				speed={speed}
			/>
			{!showAbout ? (
				<Grid matrix={cells} onChangeHandler={onSetCells} />
			) : (
				<About
					onAboutHandler={onAboutHandler}
					setPatternHandler={setPatternHandler}
				/>
			)}
		</div>
	);
}

export default App;
