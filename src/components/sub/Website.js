import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';

function Website() {
	const path = process.env.PUBLIC_URL;

	const con = useRef(null);
	const list = useRef(null);

	const info = [
		{
			title: 'VAULT GUCCI 웹사이트',
			category: 'Website (반응형) / React, SCSS, Redux, Redux-saga',
			thumb: `${path}/img/website_vaultgucci_thumb.jpg`,
			image: `${path}/img/website_vaultgucci_img.jpg`,
			concept:
				'의류브랜드 VAULT GUCCI의 주조색인 초록색을 포인트 컬러로 사용하고 블랙, 그레이, 화이트를 주조색으로 사용함. 리액트로 제작하여 Redux, Redux-saga를 사용해 공통으로 사용되는 데이터를 관리함. 소개페이지, 게시판(CRUD), 유튜브, 갤러리(flickr), 지도(kakao), 회원가입 페이지로 구성되었음. 팝업, 스크롤모션, 슬라이더 등의 스크립트를 활용함.',
			size: 'PC 1200px / Tablet 540px / Mobile 360px',
			tool: 'Photoshop, Illustrator',
			year: '2022',
			guide:
				'https://drive.google.com/file/d/1nCU3dZ0w_T70GAp-B5Lk6TuRLqFaaWgg/view',
			link: 'https://letsgo0324.github.io/react_portfolio/',
		},
		{
			title: 'JoMalone 웹사이트',
			category: 'Website (반응형) / HTML, SCSS, Javascript',
			thumb: `${path}/img/website_jomalone_thumb.jpg`,
			image: `${path}/img/website_jomalone_img.jpg`,
			concept:
				'향수브랜드 JoMalone을 그레이와 화이트 컬러를 이용해 웹접근성에 맞추어 디자인함. 회사소개, 공지사항, 유튜브, 갤러리(istope, flickr), 지도(kakao), 회원가입 페이지로 구성되어 있음. 햄버거 버튼으로 내비게이션을 적용하였고, 팝업, 스크롤모션, 롤링배너, 슬라이더, 카운터, 탭메뉴 등을 적용함.',
			size: 'PC 1200px / Tablet 540px / Mobile 360px',
			tool: 'Photoshop, Illustrator',
			year: '2022',
			guide: 'X',
			link: 'https://letsgo0324.github.io/jomalone/',
		},
		{
			title: 'OKA SOFT 웹사이트',
			category: 'Website (반응형) / HTML, CSS, jQuery',
			thumb: `${path}/img/website_oka_thumb.jpg`,
			image: `${path}/img/website_oka_img.jpg`,
			concept:
				'기업명인 OKA의 철자를 활용해 CI를 제작함. 스타트업 웹에이전시답게 톡톡튀는 오렌지 컬러와 어두운 그레이컬러를 주조색으로 사용함. 상세페이지는 탭메뉴를 사용해 각 페이지를 분할하여 직관적으로 디자인함.',
			size: 'PC 1024px / Mobile 450px',
			tool: 'Photoshop, Illustrator',
			year: '2017',
			guide: 'X',
			link: 'http://letsgo0324.dothome.co.kr/okasoft/',
		},
		{
			title: 'WithTrip 웹사이트',
			category: 'wWebsite / HTML, CSS, jQuery, Javascript',
			thumb: `${path}/img/website_withtrip_thumb.jpg`,
			image: `${path}/img/website_withtrip_img.jpg`,
			concept:
				'여행 통합 멤버십 서비스 기업답게 여행을 떠올릴 수 있는 이미지와 흰색 컬러를 활용해 디자인함. 컨텐츠가 많아 각 페이지마다 아코디언, 슬라이더, 탭메뉴 등의 다양한 스크립트를 적용함.',
			size: 'PC 1920px',
			tool: 'Photoshop, Illustrator',
			year: '2016',
			guide: 'X',
			link: 'http://letsgo0324.dothome.co.kr/withtrip/',
		},
		{
			title: '쿠론 웹사이트 (메인)',
			category: 'Website (반응형) / HTML, CSS',
			thumb: `${path}/img/website_couronne_thumb.jpg`,
			image: `${path}/img/website_couronne_img.jpg`,
			concept:
				'그리드 형태를 활용해 마우스가 해당 박스 호버시 아이콘과 텍스티가 자연스럽게 등장하거나 배경 컬러가 바뀌게 적용함. 가을 신상을 메인으로 베이지색을 주조색으로 활용해 톤다운된 차분한 컬러로 통일성을 주고자 함.',
			size: 'PC 1600px, 1280px / Tablet 1024px, 780px, 640px / Mobile 480px, 380px',
			tool: 'Photoshop, Illustrator',
			year: '2017',
			guide: 'X',
			link: 'https://letsgo0324.github.io/couronne/',
		},
		{
			title: '공차 웹사이트 (메인)',
			category: 'Website (반응형) / HTML, CSS',
			thumb: `${path}/img/website_gongcha_thumb.jpg`,
			image: `${path}/img/website_gongcha_img.jpg`,
			concept:
				'공차의 CI 컬러인 레드를 메인 컬러로 내세워 배경 및 사이트 곳곳에 적용해 통일감을 가지되 튀지 않고 조화롭게 어울리게 만들고자 함. 고객들이 공차의 다양한 메뉴를 볼 수 있게 메인에 내세우고 검색창을 가운데 배치함.',
			size: 'PC 1200px / Tablet 1024px / Mobile 600px',
			tool: 'Photoshop, Illustrator',
			year: '2017',
			guide: 'X',
			link: 'https://letsgo0324.github.io/gongcha/',
		},
		{
			title: 'JBL 웹사이트 (메인)',
			category: 'Website / HTML, CSS',
			thumb: `${path}/img/website_jbl_thumb.jpg`,
			image: `${path}/img/website_jbl_img.jpg`,
			concept:
				'음향기기 JBL의 다양한 상품을 보여주기 위해 풀스크린 형식으로 디자인함. CSS를 활용해 마우스 휠을 움직일때 줌 또는 아웃되는 모션을 적용하고, 마우스 커서를 좌우로 움직일 때 겹쳐진 세가지 이미지가 조금씩 따라 움직이게끔 모션 적용. 상품 자체의 컬러풀함에서 착안해 웹사이트 역시 컬러풀하게 제작하되 배경을 하늘색톤으로 지정하여 다양한 컬러의 상품들이 튀지 않게 조정함.',
			size: 'PC Full screen',
			tool: 'Photoshop, Illustrator',
			year: '2017',
			guide: 'X',
			link: 'https://letsgo0324.github.io/jbl/',
		},
	];

	const [item, setItem] = useState(null);
	const [conInfo] = useState(info);

	const [index, setIndex] = useState(0);

	useEffect(() => {
		con.current.innerHTML = '';

		const item = con.current;

		item.innerHTML = `
			<div className="wrap infomation" style='display:flex; flex-wrap: wrap; justify-content:space-between; align-items:stretch'>			
				<article style='width:60%; overflow:hidden'>
					<img src='${conInfo[index].image}' style="width:100%; object-fit:cover"/>
				</article>
				
				<article style='width:38%; overflow:hidden;'>
					<table style='width: 100%; border-collapse: collapse'>
						<tbody>
							<tr style='border-bottom: 1px solid #eee; border-top: 3px solid #555'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333'>TITLE</th>
								<td style='font: 14px/1 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].title}</td>
							</tr>
							<tr style='border-bottom: 1px solid #eee'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333'>CATEGORY</th>
								<td style='font: 14px/1.5 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].category}</td>
							</tr>
							<tr style='border-bottom: 1px solid #eee'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333;'>CONCEPT</th>
								<td style='font: 14px/1.5 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].concept}</td>
							</tr>
							<tr style='border-bottom: 1px solid #eee'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333'>SIZE</th>
								<td style='font: 14px/1.5 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].size}</td>
							</tr>
							<tr style='border-bottom: 1px solid #eee'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333'>TOOL</th>
								<td style='font: 14px/1 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].tool}</td>
							</tr>
							<tr style='border-bottom: 1px solid #eee'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333'>YEAR</th>
								<td style='font: 14px/1 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].year}</td>
							</tr>
							<tr style='border-bottom: 1px solid #eee'>
								<th style='width: 30%; font: bold 14px/1.5 "Raleway"; color: #333'>CORDING GUIDE</th>
								<td style='font: 12px/1.5 "Noto Sans KR"; color: #333; padding: 20px 0'><a href='${conInfo[index].guide}' style="text-decoration:none; color: #333;" target=_blank>${conInfo[index].guide}</a></td>
							</tr>
							<tr style='border-bottom: 3px solid #555'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333'>LINK</th>
								<td style='font: 14px/1 "Noto Sans KR"; color: #333; padding: 20px 0'><a href='${conInfo[index].link}' style="text-decoration:none; color: #333;" target=_blank><strong style='color:red'>VIEW</strong></a> - 클릭시 해당 웹사이트가 새창으로 열립니다</td>
							</tr>
						</tbody>
					</table>
				</article>				
			</div>
			`;

		const articles = list.current.querySelectorAll('article');
		for (const article of articles) article.classList.remove('on');
		articles[index].classList.add('on');

		setItem(item);
	}, [index]);

	return (
		<Layout
			name={'website'}
			subTxt={'Responsive Web, HTML, CSS, SCSS, Javascript, React'}>
			<div className='websiteList'>
				<h1>WEBSITE</h1>
				<div className='wrap' ref={list}>
					{conInfo.map((info, idx) => {
						return (
							<article key={idx} onClick={() => setIndex(idx)}>
								<div className='imgWrap'>
									<img src={info.thumb} />
								</div>

								<h2>{info.title}</h2>
							</article>
						);
					})}
				</div>
				<div id='con' ref={con}></div>
			</div>
		</Layout>
	);
}

export default Website;
