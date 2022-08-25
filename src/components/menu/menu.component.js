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

				<div className='menu-item' onClick={props.onAboutHandler}>
					About
				</div>
			</div>
			<div className='speed-wrapper'>
				<span>Speed</span>
				<input
					className='speed-selector'
					type='range'
					min='50'
					max='1150'
					step='50'
					value={props.speed}
					onChange={props.onSpeedHandler}
				/>
			</div>
		</div>
	);
};

export default Menu;
