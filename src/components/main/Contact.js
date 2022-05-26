import { NavLink } from 'react-router-dom';
const path = process.env.PUBLIC_URL;

function Contact() {
	return (
		<section id='contact'>
			<div className='inner'>
				<div className='wrap'>
					<article>
						<h1>contact</h1>
						<div className='box'>
							<h2>If you do not walk today, you will have to run tomorrow</h2>
						</div>

						<div className='contact_txt'>
							<ul className='subTit'>
								<li>DATE</li>
								<li>E-MAIL</li>
								<li>MOBILE</li>
							</ul>
							<ul className='txt'>
								<li>1988.03.24</li>
								<li>letsgo0324@naver.com</li>
								<li>010-3607-6324</li>
							</ul>
						</div>
					</article>

					<article>
						<h1>works</h1>
						<div className='wrap'>
							<div className='works_items'>
								<a
									href='https://letsgo0324.github.io/react_portfolio/'
									target='_blank'>
									<div className='pic'>
										<img
											src={`${path}/img/website_vaultgucci_thumb.jpg`}
											alt='works1 image'
										/>
									</div>
								</a>
								<span>REACT</span>
								<h2>
									VAULT GUCCI
									<span>
										<a
											href='https://letsgo0324.github.io/react_portfolio/'
											target='_blank'>
											Go to Website
										</a>
									</span>
								</h2>
								<h3>
									코딩가이드
									<span>
										<a
											href='https://drive.google.com/file/d/1nCU3dZ0w_T70GAp-B5Lk6TuRLqFaaWgg/view?usp=sharing'
											target='_blank'>
											VIEW
										</a>
									</span>
								</h3>
							</div>
							<div className='works_items'>
								<a
									href='https://letsgo0324.github.io/jomalone/'
									target='_blank'>
									<div className='pic'>
										<img
											src={`${path}/img/website_jomalone_thumb.jpg`}
											alt='works2 image'
										/>
									</div>
								</a>
								<span>HTML/SCSS</span>
								<h2>
									JoMalone
									<span>
										<a
											href='https://letsgo0324.github.io/jomalone/'
											target='_blank'>
											Go to Website
										</a>
									</span>
								</h2>
							</div>
							<div className='works_items'>
								<NavLink to='apps'>
									<div className='pic'>
										<img
											src={`${path}/img/app_okIcms_thumb.jpg`}
											alt='works3 image'
										/>
									</div>
								</NavLink>
								<span>APP</span>
								<h2>
									OK-ICMS
									<span>
										<NavLink to='apps'>VIEW MORE</NavLink>
									</span>
								</h2>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Contact;
