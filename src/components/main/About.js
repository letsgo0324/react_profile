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
								<h3>성격1</h3>
								<p>성격 내용1</p>
							</div>
							<div className='con'>
								<h3>성격2</h3>
								<p>성격 내용2</p>
							</div>
							<div className='con'>
								<h3>성격3</h3>
								<p>성격 내용3</p>
							</div>
							<div className='con'>
								<h3>성격4</h3>
								<p>성격 내용4</p>
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
