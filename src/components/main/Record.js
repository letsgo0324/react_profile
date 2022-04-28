import { useState } from 'react';

function Record() {
	const exArr = [
		{
			title: '경력1',
			date: '2000-2000',
			sub: '관련 내용 요약1',
			description1: '관련 내용1',
			description2: '관련 내용1',
		},
		{
			title: '경력2',
			date: '2010-2010',
			sub: '관련 내용 요약2',
			description1: '관련 내용2',
			description2: '관련 내용2',
		},
	];

	const [exCon] = useState(exArr);

	const eduArr = [
		{
			title: '교육1',
			date: '2000-2000',
			description: '관련 내용1',
		},
		{
			title: '교육2',
			date: '2010-2010',
			description: '관련 내용2',
		},
		{
			title: '교육3',
			date: '2000-2000',
			description: '관련 내용1',
		},
		{
			title: '교육4',
			date: '2010-2010',
			description: '관련 내용2',
		},
		{
			title: '교육5',
			date: '2000-2000',
			description: '관련 내용1',
		},
		{
			title: '교육6',
			date: '2010-2010',
			description: '관련 내용2',
		},
	];

	const [eduCon] = useState(eduArr);

	const licenseArr = [
		{
			title: '멀티미디어콘텐츠제작전문가',
			date: '2018.05.04',
		},
		{
			title: '컴퓨터그래픽스운용기능사',
			date: '2015.12.24',
		},
		{
			title: '웹디자인기능사',
			date: '2015.12.11',
		},
		{
			title: 'GTQ(그래픽기술자격) 1급',
			date: '2015.06.12',
		},
		{
			title: '컴퓨터활용능력 2급',
			date: '2013.04.05',
		},
		{
			title: '워드프로세서',
			date: '2013.03.01',
		},
		{
			title: '자동차운전면허 2종보통',
			date: '2011.05.16',
		},
	];

	const [licenseCon] = useState(licenseArr);

	return (
		<section id='record'>
			<div className='inner'>
				<div className='wrap'>
					<article>
						<div className='experience'>
							<h1>experience</h1>

							<div className='con'>
								{exCon.map((con, idx) => {
									return (
										<div className='txt' key={idx}>
											<h2>{con.title}</h2>
											<h3>{con.date}</h3>
											<p>{con.sub}</p>
											<p>{con.description1}</p>
											<p>{con.description2}</p>
										</div>
									);
								})}
							</div>
						</div>

						<div className='license'>
							<h1>license</h1>

							<div className='con'>
								{licenseCon.map((con, idx) => {
									return (
										<div className='txt' key={idx}>
											<ul>
												<li>
													<h2>{con.title}</h2>
												</li>
												<li>
													<h3>{con.date}</h3>
												</li>
											</ul>
										</div>
									);
								})}
							</div>
						</div>
					</article>

					<article className='education'>
						<h1>education</h1>

						<div className='con'>
							{eduCon.map((con, idx) => {
								return (
									<div className='txt' key={idx}>
										<h2>{con.title}</h2>
										<h3>{con.date}</h3>
										<p>{con.description}</p>
									</div>
								);
							})}
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Record;
