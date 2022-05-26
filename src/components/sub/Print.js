import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';

function Print() {
	const path = process.env.PUBLIC_URL;

	const con = useRef(null);
	const list = useRef(null);

	const info = [
		{
			title: '코리아패스 선불카드',
			category: 'Print / Gift Card',
			thumb: `${path}/img/print_giftcard_thumb.jpg`,
			image: `${path}/img/print_giftcard_img.jpg`,
			concept:
				'코리아패스 선불카드 겸용 기프트카드로 여행 특화용 카드. 대한민국 광역시 6곳 각각의 대표적인 관광지 이미지를 카드에 삽입하여 시리즈로 제작함. 한국적인 느낌을 내기 위해 붓으로 그린 듯한 효과를 내고자 일러스트를 추가해 디자인함.',
			size: '86mm * 54mm',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '아티모 명함',
			category: 'Print / Business Card',
			thumb: `${path}/img/print_businessCard1_thumb.jpg`,
			image: `${path}/img/print_businessCard1_img.jpg`,
			concept:
				'모터사이클 대여 전문 업체 명함 디자인. 회사명인 ATTIMO에 철자  A와 M을 모티브로 모터사이클을 형상화한 로고. 스포티한 느낌을 주기 위해 오렌지, 블루 컬러를 사용함.',
			size: '90mm * 50mm',
			tool: 'Illustrator',
		},
		{
			title: '전국레저협회 명함',
			category: 'Print / Business Card',
			thumb: `${path}/img/print_businessCard2_thumb.jpg`,
			image: `${path}/img/print_businessCard2_img.jpg`,
			concept:
				'여행전문기업의 명함으로, 영문명인 Nationalwide Leisure Association에서 철자 L, A를 필기체 형식으로 형상화함. 여행하면 떠오르는 바다, 하늘 등의 이미지 컬러인 하늘색을 사용하였고, 그라데이션을 통해 시원한 느낌이 들게끔 컬러를 설정함.',
			size: '90mm * 50mm',
			tool: 'Illustrator',
		},
		{
			title: '프렌즈 시리즈 북커버',
			category: 'Print / Book Cover',
			thumb: `${path}/img/print_book_thumb.jpg`,
			image: `${path}/img/print_book_img.jpg`,
			concept:
				'프렌즈 북커버 뉴욕, 오사카, 이탈리아 리뉴얼 디자인. 배경은 각 나라의 국기에서 모티브를 얻어 패턴으로 만들고, 각 나라마다 특정 컬러를 지정해 통일성 있지만 나라별로 차별화를 주어 시리즈로 제작함. 표지에는 각 나라의 유명 관광지를 메인 비주얼로 내세움.',
			size: '142mm * 210mm',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: 'WithTrip 카탈로그',
			category: 'Print / Catalog',
			thumb: `${path}/img/print_catalog_thumb.jpg`,
			image: `${path}/img/print_catalog_img.jpg`,
			concept:
				'네이비에서 파스텔 블루까지 컬러를 활용해 각 섹션별 테두리 컬러를 적용해 구분하기 쉽게 디자인함. 지도는 일러스트로 디자인하고, 아이콘, 다양한 레이아웃으로 깔끔하게 만들고자 함.',
			size: '21cm * 29.7cm',
			tool: 'Photoshop, Illustrator, InDesign',
		},
		{
			title: '씨엘코코 엽서',
			category: 'Print / Postcard',
			thumb: `${path}/img/print_postcard_thumb.jpg`,
			image: `${path}/img/print_postcard_img.jpg`,
			concept:
				'사은품 증정을 위해 제작한 엽사서 신상 S/S 상품을 홍보하기 위한 목적으로 제작해 연말에 럭키박스 이벤트에 동봉함. 신상품을 자연스럽게 보여주며 감사의 의미를 담고자 하였음. 각기 다른 이미지의 4종 세트로 디자인함.',
			size: '100mm * 150mm',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '앱솔루트 보드카 포스터',
			category: 'Print / Poster',
			thumb: `${path}/img/print_poster_thumb.jpg`,
			image: `${path}/img/print_poster_img.jpg`,
			concept:
				'앱솔루트 보드가 광고를 눈길 편, 고드름 편, 페인트 편 세가지로 나눠 디자인함. 어디에서든 앱솔루트 보드카 병을 떠올릴 수 있다는 메시지를 담음.',
			size: '210mm * 296mm',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '포레스트캠프 신문광고',
			category: 'Print / Newspaper',
			thumb: `${path}/img/print_newspaper_thumb.jpg`,
			image: `${path}/img/print_newspaper_img.jpg`,
			concept:
				'신문 하단 광고. 주이미지의 오렌지와 그레이컬러를 활용해 디자인함. 담을 내용이 많아 레이아웃을 깔끔하게 하고자 함.',
			size: '277mm * 138mm',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '씨엘코코 입간판',
			category: 'Print / Banner',
			thumb: `${path}/img/print_banner_thumb.jpg`,
			image: `${path}/img/print_banner_img.jpg`,
			concept:
				'오프라인 매장에 배치할 입간판과 안내데스크 위에 배치할 미니배너 두 가지 사이즈로 제작함. 제작 당시 여름이었기 때문에 여름 분위기를 낼 수 있는 이미지를 선정함. 안내할 내용이 많아 텍스트의 레이아웃을 고려해 디자인함.',
			size: '입간판 500mm * 1500mm / 미니배너 152mm * 302mm',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '씨엘코코 현수막',
			category: 'Print / Banner',
			thumb: `${path}/img/print_bannerBig_thumb.jpg`,
			image: `${path}/img/print_bannerBig_img.jpg`,
			concept:
				'오프라인 행사를 위해 제작한 현수막. 가로 사이즈가 길고 담을 내용이 많지 않았으므로, 양 옆에 이미지를 배치하고 가운데 전달하고자 하는 메시지가 잘 보이게끔 디자인함.',
			size: '4500mm * 700mm',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '씨엘코코 스탬프',
			category: 'Print / Stamp',
			thumb: `${path}/img/print_stamp_thumb.jpg`,
			image: `${path}/img/print_stamp_img.jpg`,
			concept:
				'럭키박스 이벤트시, 박스에 찍을 스탬프 제작. 재생지를 사용한 포장지의 컨셉과 기존 로고가 조화롭게 어울리게 디자인함.',
			size: '38mm * 38mm',
			tool: 'Illustrator',
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
								<td style='font: 14px/1 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].category}</td>
							</tr>
							<tr style='border-bottom: 1px solid #eee'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333;'>CONCEPT</th>
								<td style='font: 14px/1.5 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].concept}</td>
							</tr>
							<tr style='border-bottom: 1px solid #eee'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333'>SIZE</th>
								<td style='font: 14px/1 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].size}</td>
							</tr>
							<tr style='border-bottom: 3px solid #555'>
								<th style='width: 30%; font: bold 14px/1 "Raleway"; color: #333'>TOOL</th>
								<td style='font: 14px/1 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].tool}</td>
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
			name={'print'}
			subTxt={'Business Card, Gift Card, Book Cover, Banner etc'}>
			<div className='printList'>
				<h1>PRINT</h1>
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

export default Print;
