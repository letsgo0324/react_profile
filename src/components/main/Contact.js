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
								<li>010-3607-3624</li>
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
										<img src={`${path}/img/works1.jpg`} alt='works1 image' />
									</div>
								</a>
								<span>REACT</span>
								<h2>
									VAULT GUCCI
									<span>
										<a
											href='https://letsgo0324.github.io/react_portfolio/'
											target='_blank'>
											VIEW
										</a>
									</span>
								</h2>
								<h3>
									코딩가이드 <span>Download</span>
								</h3>
							</div>
							<div className='works_items'>
								<a
									href='https://letsgo0324.github.io/jomalone/'
									target='_blank'>
									<div className='pic'>
										<img src={`${path}/img/works2.jpg`} alt='works2 image' />
									</div>
								</a>
								<span>HTML/CSS</span>
								<h2>
									JoMalone
									<span>
										<a
											href='https://letsgo0324.github.io/jomalone/'
											target='_blank'>
											VIEW
										</a>
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
