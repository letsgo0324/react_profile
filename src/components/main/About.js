import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFilm,
	faPlaneDeparture,
	faBook,
} from '@fortawesome/free-solid-svg-icons';

function About() {
	return (
		<section id='about'>
			<div className='inner'>
				<h1>about</h1>
				<div className='wrap'>
					<article>
						<h2>personality</h2>
						<div className='personality'>
							<div className='con'>
								<h3>persoanl1</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deleniti, laudantium!
								</p>
							</div>
							<div className='con'>
								<h3>persoanl2</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deleniti, laudantium!
								</p>
							</div>
							<div className='con'>
								<h3>persoanl3</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deleniti, laudantium!
								</p>
							</div>
							<div className='con'>
								<h3>persoanl4</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deleniti, laudantium!
								</p>
							</div>
						</div>
					</article>
					<article>
						<h2>interests</h2>
						<div className='interest'>
							<ul>
								<li>
									<FontAwesomeIcon icon={faFilm} />
									<span>MOVIE</span>
								</li>
								<li>
									<FontAwesomeIcon icon={faPlaneDeparture} />
									<span>TRAVEL</span>
								</li>
								<li>
									<FontAwesomeIcon icon={faBook} />
									<span>BOOK</span>
								</li>
							</ul>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default About;
