import { NavLink } from 'react-router-dom';
const path = process.env.PUBLIC_URL;

function WorkSub() {
	return (
		<section id='workSub'>
			<div className='inner'>
				<h1>works more</h1>
				<div className='wrap'>
					<article>
						<h2>
							<NavLink to='website'>WEBSITE MORE</NavLink>
						</h2>

						<div className='item'>
							<div className='pic'>
								<img
									src={`${path}/img/website_oka_thumb.jpg`}
									alt='works website'
								/>
							</div>

							<h3>OKA SOFT 웹사이트</h3>
						</div>
					</article>
					<article>
						<h2>
							<NavLink to='design'>DESIGN MORE</NavLink>
						</h2>

						<div className='item'>
							<div className='pic'>
								<img
									src={`${path}/img/design_cielcoco11_thumb.jpg`}
									alt='works design'
								/>
							</div>

							<h3>카카오채널 이벤트페이지</h3>
						</div>
					</article>
					<article>
						<h2>
							<NavLink to='apps'>APP MORE</NavLink>
						</h2>

						<div className='item'>
							<div className='pic'>
								<img
									src={`${path}/img/app_bam_thumb.jpg`}
									alt='works website'
								/>
							</div>

							<h3>BAM 파비콘</h3>
						</div>
					</article>
					<article>
						<h2>
							<NavLink to='print'>PRINT MORE</NavLink>
						</h2>

						<div className='wrap'>
							<div className='item'>
								<div className='pic'>
									<img
										src={`${path}/img/print_businessCard2_thumb.jpg`}
										alt='works website'
									/>
								</div>
								<h3>전국레저협회 명함</h3>
							</div>
							<div className='item'>
								<div className='pic'>
									<img
										src={`${path}/img/print_catalog_thumb.jpg`}
										alt='works website'
									/>
								</div>
								<h3>WithTrip 카탈로그</h3>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default WorkSub;
