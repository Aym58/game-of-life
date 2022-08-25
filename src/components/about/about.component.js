const About = (props) => {
	return (
		<div className='about-wrapper'>
			<div className='about'>
				<div className='close-btn-container'>
					<button className='close-btn' onClick={props.onAboutHandler}>
						X
					</button>
				</div>
				<div className='about-content-block'>
					<h2>Rules</h2>
					<h3>For a space that is populated:</h3>
					<ul>
						<li>Each cell with one or no neighbors dies, as if by solitude.</li>
						<li>
							Each cell with four or more neighbors dies, as if by
							overpopulation.
						</li>
						<li>Each cell with two or three neighbors survives.</li>
					</ul>
					<h3>For a space that is empty or unpopulated:</h3>
					<ul>
						<li>Each cell with three neighbors becomes populated.</li>
					</ul>
				</div>
				<div className='about-content-block'>
					<h2>Try pattern</h2>
					<div
						className='pattern-wrapper'
						onClick={() => {
							props.setPatternHandler('glider');
							props.onAboutHandler();
						}}
					>
						<div className='pattern-block'>
							<img
								src={require('./patterns/glider.jpg')}
								alt='Glider pattern'
							/>
						</div>
						<div className='pattern-name'>Glider</div>
					</div>
					<div
						className='pattern-wrapper'
						onClick={() => {
							props.setPatternHandler('spaceship');
							props.onAboutHandler();
						}}
					>
						<div className='pattern-block'>
							<img
								src={require('./patterns/spaceship.jpg')}
								alt='Glider pattern'
							/>
						</div>
						<div className='pattern-name'>Spaceship</div>
					</div>
					<div
						className='pattern-wrapper'
						onClick={() => {
							props.setPatternHandler('pulsar');
							props.onAboutHandler();
						}}
					>
						<div className='pattern-block'>
							<img
								src={require('./patterns/pulsar.jpg')}
								alt='Glider pattern'
							/>
						</div>
						<div className='pattern-name'>Pulsar</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
