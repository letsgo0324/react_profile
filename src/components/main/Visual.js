const path = process.env.PUBLIC_URL;

function Visual() {
	return (
		<section id='visual'>
			<div className='inner'>
				<div className='tit'>
					<h1>KIM EUN SOOK</h1>
					<h2>WEB DESIGNER / WEB PUBLISHER / FRONT-END DEV</h2>
				</div>
			</div>
			<div className='pic'>
				<img src={`${path}/img/visual_img.jpg`} alt='image background' />
			</div>
		</section>
	);
}

export default Visual;
