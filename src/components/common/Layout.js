import { useEffect, useRef } from 'react';

function Layout(props) {
	let frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<>
			<section className={`content ${props.name}`} ref={frame}>
				<figure>
					<div className='inner'>
						<div className='tit'>
							<h1>{props.name}</h1>
							<p>{props.subTxt}</p>
						</div>
					</div>
				</figure>
				<div className='inner'>{props.children}</div>
			</section>
		</>
	);
}

export default Layout;
