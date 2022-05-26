import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';

function Design() {
	const path = process.env.PUBLIC_URL;

	const con = useRef(null);
	const list = useRef(null);

	const info = [
		{
			title: '이벤트페이지',
			sub: '에코하우스 이벤트페이지',
			category: 'Web Design / Event Page',
			thumb: `${path}/img/design_cielcoco10_thumb.jpg`,
			image: `${path}/img/design_cielcoco10_img.jpg`,
			concept:
				'에코하우스와 씨엘코코의 콜라보레이션으로 진행한 이벤트 페이지. 패키지 디자인에 맞추어 이벤트 페이지도 청록색을 주조색으로 사용해 시원함이 느껴지게 디자인함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '이벤트페이지',
			sub: '카카오채널 이벤트페이지',
			category: 'Web Design / Event Page',
			thumb: `${path}/img/design_cielcoco11_thumb.jpg`,
			image: `${path}/img/design_cielcoco11_img.jpg`,
			concept:
				'카카오 채널 추가시 할인쿠폰을 받을 수 있다는 안내를 하기 위한 페이지. 가입 순서를 알아보기 쉽게 설명하고자 목업을 활용함.',
			size: '1000px',
			tool: 'Photoshop',
		},
		{
			title: 'E-Book',
			sub: '포레스트캠프 E-Book',
			category: 'Web Design / Tablet E-Book',
			thumb: `${path}/img/design_ebook_thumb.jpg`,
			image: `${path}/img/design_ebook_img.jpg`,
			concept:
				'영업팀에서 고객에게 카탈로그 대신 상품을 설명하기 위해 사용한 E-Book. 고객설문, 설문결과, 상품설명 등으로 구성되어 있음. OK-ICMS 프로그램과 통일성을 주기 위해 베이지, 브라운 계열을 주조색으로 사용함.',
			size: '2048px * 1152px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: 'SNS',
			sub: '인스타그램',
			category: 'SNS / Instagram',
			thumb: `${path}/img/design_insta1_thumb.jpg`,
			image: `${path}/img/design_insta1_img.jpg`,
			concept:
				'평생 애프터서비스를 인스타그램에 홍보하기 위해 제작. 눈에 띄는 옐로우 배경과 블랙 폰트를 사용하였고, 적절한 이미지를 활용해 디자인함.',
			size: '1080px * 1080px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: 'SNS 동영상',
			sub: '인스타그램 동영상',
			category: 'SNS / Instagram Video',
			thumb: `${path}/img/design_insta2_thumb.jpg`,
			image: `${path}/img/design_insta2_img.jpg`,
			concept:
				'평생 애프터서비스를 인스타그램에 홍보하기 위해 동영상으로 제작. 팝아트 느낌을 내기 위해 강조효과와 다양한 컬러, 테두리선 등을 활용해 디자인함.',
			size: '1080px * 1080px',
			tool: 'PowerPoint, Photoshop, Illustrator',
		},
		{
			title: '휴무 팝업',
			sub: '광복절 휴무 팝업',
			category: 'Web Design / Popup',
			thumb: `${path}/img/design_popup1_thumb.jpg`,
			image: `${path}/img/design_popup1_img.jpg`,
			concept:
				'광복절로 인해 휴무 안내가 필요했고, 그걸 나타내기 위해 태극기를 활용해 직관적으로 디자인함.',
			size: 'PC 500px * 500px / Mobile 280px * 280px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '봄세일 팝업',
			sub: '봄맞이 세일 팝업',
			category: 'Web Design / Popup',
			thumb: `${path}/img/design_popup2_thumb.jpg`,
			image: `${path}/img/design_popup2_img.jpg`,
			concept:
				'봄맞이 세일을 안내하기 위해 봄 느낌이 나는 파스텔톤을 활용해 디자인함.',
			size: 'PC 500px * 500px / Mobile 280px * 280px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '오가닉마스크 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_mask1_thumb.jpg`,
			image: `${path}/img/design_mask1_img.jpg`,
			concept:
				'필터삽입이 가능한 유기농 소재의 마스크라는 특장점을 강조하고자 함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '3D입체마스크 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_mask2_thumb.jpg`,
			image: `${path}/img/design_mask2_img.jpg`,
			concept:
				'3중 구조, 3D 입체마스크, 국내 자체 제작 등의 특장점을 강조하고자 함. ',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '포니원 브라탑 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_fonione1_thumb.jpg`,
			image: `${path}/img/design_fonione1_img.jpg`,
			concept:
				'로고 밴드 크롭탑과 각종 특장점을 디테일컷과 화보이미지를 교차 배치해 디자인함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '포니원 후드크롭티 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_fonione2_thumb.jpg`,
			image: `${path}/img/design_fonione2_img.jpg`,
			concept:
				'메쉬 크롭티를 여름에 어울리게끔 하기 위해 청량한 푸른색을 주조색으로 사용함. 아이콘에도 단색이 아닌 투톤으로 적용함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 집업자켓 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco01_thumb.jpg`,
			image: `${path}/img/design_cielcoco01_img.jpg`,
			concept:
				'의류의 특징인 플라켓, 하이넥, 절개라인, 소재 등을 강조하고자 함. 그레이스의 지퍼 컬러가 블랙으로 촬영되어 완제품의 색상과는 달라 지퍼 컬러를 모두 보정함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 조거팬츠 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco02_thumb.jpg`,
			image: `${path}/img/design_cielcoco02_img.jpg`,
			concept: '조거팬츠의 슬림한 라인, 밴딩, 스트링 등을 강조함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 레깅스 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco03_thumb.jpg`,
			image: `${path}/img/design_cielcoco03_img.jpg`,
			concept:
				'레깅스의 셔링포인트, Y존 프리 등의 특징을 강조하고자 디테일컷에 신경씀.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 부츠컷 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco04_thumb.jpg`,
			image: `${path}/img/design_cielcoco04_img.jpg`,
			concept: '부츠컷의 냉감 소재, 핏, 주머니, 활용감 등을 강조함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 조거팬츠 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco05_thumb.jpg`,
			image: `${path}/img/design_cielcoco05_img.jpg`,
			concept:
				'조거팬츠의 특장점을 해쉬태그를 활용해 강조함. 의류 구매시 사은품 증정 페이지 추가 제작.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 레깅스 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco06_thumb.jpg`,
			image: `${path}/img/design_cielcoco06_img.jpg`,
			concept: '레더 레깅스의 특별한 소재를 강조하기 위해 배경으로 삽입함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 브라탑 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco07_thumb.jpg`,
			image: `${path}/img/design_cielcoco07_img.jpg`,
			concept:
				'브라탑의 시원한 소재, 컬러, 디테일을 강조하고자 청량한 컬러를 사용함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 크롭탑 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco08_thumb.jpg`,
			image: `${path}/img/design_cielcoco08_img.jpg`,
			concept:
				'허리라인의 프릴 디테일과 다양한 특징을 박스형 레이아웃과 이미지를 이용해 첫 페이지에서 바로 인식할 수 있게 디자인함.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: '상세페이지',
			sub: '씨엘코코 롱슬리브 상세페이지',
			category: 'Web Design / Web page',
			thumb: `${path}/img/design_cielcoco09_thumb.jpg`,
			image: `${path}/img/design_cielcoco09_img.jpg`,
			concept:
				'시원한 소재의 의류임을 강조하기 위해 얼음 배경을 합성해 메인으로 내세움.',
			size: '1000px',
			tool: 'Photoshop, Illustrator',
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
								<td style='font: 14px/1 "Noto Sans KR"; color: #333; padding: 20px 0'>${conInfo[index].sub}</td>
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
		<Layout name={'design'} subTxt={'Web Deisign, Web Page, E-Book, SNS'}>
			<div className='designList'>
				<h1>DESIGN</h1>
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

export default Design;
