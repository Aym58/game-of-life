const Menu = (props) => {
	return (
		<div className='menu-wrapper'>
			<div className='logo-wrapper'>
				<h1 className='logo'>Game of Life</h1>
			</div>
			<div className='menu'>
				{!props.runState ? (
					<div className='menu-item' onClick={props.onStartHandler}>
						Start!
					</div>
				) : (
					<div className='menu-item' onClick={props.onStartHandler}>
						Stop!
					</div>
				)}

				<div className='menu-item' onClick={props.onClearHandler}>
					Clear
				</div>
			</div>
			<div className='speed-wrapper'>
				<span>Speed</span>
				<input
					className='speed-selector'
					type='range'
					min='100'
					max='1100'
					step='100'
					value={props.speed}
					onChange={props.onSpeedHandler}
				/>
			</div>
		</div>
	);
};

export default Menu;
