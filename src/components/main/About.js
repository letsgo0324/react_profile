import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFilm,
	faPlaneDeparture,
	faBook,
} from '@fortawesome/free-solid-svg-icons';

function About() {
	const psArr = [
		{
			title: '성실함',
			description: '어려운 일이 닥쳐도 좌절하거나 포기하지 않는 꾸준함',
		},
		{
			title: '꼼꼼함',
			description: '사소한것 하나도 놓치지 않고 메모하는 습관',
		},
		{
			title: '추진력',
			description: '목표가 정해지면 플랜을 세워 완료하는 적극성과 계획성',
		},
		{
			title: '모험심',
			description: '패러글라이딩, 스카이다이빙 같은 액티비티 즐기기',
		},
	];
	const [psCon] = useState(psArr);

	return (
		<section id='about'>
			<div className='inner'>
				<h1>about</h1>

				<div className='wrap'>
					<article>
						<h2>personality</h2>
						<div className='personality'>
							{psCon.map((con, idx) => {
								return (
									<div className='con' key={idx}>
										<h3>{con.title}</h3>
										<p>{con.description}</p>
									</div>
								);
							})}
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
