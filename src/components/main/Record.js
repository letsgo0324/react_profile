import { useState } from 'react';

function Record() {
	const exArr = [
		{
			title: '선향 / 전략기획팀 대리 근무',
			date: '2019.04 – 2020.11',
			sub: '씨엘코코&포니원 사이트 상세페이지 제작 및 디자인',
			description1:
				'사이트 배너 및 디자인, 오픈마켓 상품 업로드, 인스타그램 동영상 제작, 사이트 유지보수',
			description2:
				'각종 촬영 컨셉 및 리서치 등 디자인 관련 전반적인 업무 담당',
		},
		{
			title: '리더스클럽밸리 / IT개발팀 주임 근무',
			date: '2016.01 – 2017.08',
			sub: '홈페이지 제작 및 디자인',
			description1: 'HTML, CSS 웹표준 퍼블리싱, 모바일 어플 디자인',
			description2:
				'카탈로그 디자인, 명함 디자인, CI 디자인 등 디자인 관련 전반적인 업무 담당',
		},
	];

	const [exCon] = useState(exArr);

	const eduArr = [
		{
			title: '웹퍼블리셔(중급)',
			date: '2017.11 – 2017.12',
			description: '더조은컴퓨터아카데미',
		},
		{
			title: '영상제작(프리미어, 에펙)',
			date: '2017.11 – 2017.12',
			description: '더조은컴퓨터아카데미',
		},
		{
			title: '반응형 웹포트폴리오',
			date: '2017.09 – 2017.10',
			description: '더조은컴퓨터아카데미',
		},
		{
			title: '디지털웹디자인(고급)',
			date: '2017.01 – 2017.03',
			description: '더조은컴퓨터아트학원',
		},
		{
			title: '서울동부기술교육원',
			date: '2015.03 – 2015.12',
			description: '포토샵, 일러스트, 인디자인, 플래시, HTML, JQueryMobile 등',
		},
		{
			title: '세명대학교 광고홍보학과 졸업',
			date: '2007.03 – 2013.02',
			description: '학점 4.19/4.5',
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
