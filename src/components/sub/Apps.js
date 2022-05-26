import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';

function Apps() {
	const path = process.env.PUBLIC_URL;

	const con = useRef(null);
	const list = useRef(null);

	const info = [
		{
			title: 'OK-ICMS 어플리케이션',
			category: 'App / Application Design',
			thumb: `${path}/img/app_okIcms_thumb.jpg`,
			image: `${path}/img/app_okIcms_img.jpg`,
			concept:
				'기업의 영업팀에서 고객관리를 하고, 회사에서는 데이터 관리를 위해 프로그램과 연동하여 만든 어플리케이션. 일정, 공지, 문의사항, 지도, 고객정보 등을 입력, 수정, 확인할 수 있음. 브라운, 베이지 컬러의 편안한 컬러를 이용해 디자인함.',
			size: 'Mobile',
			tool: 'Illustrator, 9Patch',
		},
		{
			title: 'SayCap 어플리케이션',
			category: 'App / Application Design',
			thumb: `${path}/img/app_saycap_thumb.jpg`,
			image: `${path}/img/app_saycap_img.jpg`,
			concept:
				'사진을 촬영하고, 목소리를 녹음하면 텍스트로 변환이 가능한 어플리케이션. 로그인, 공지사항, 갤러리, 카메라, 녹음 등이 가능함. 레드, 퍼플의 그라데이션을 주조색으로, 화이트, 라이트그레이 컬러를 이용해 디자인함.',
			size: 'Mobile',
			tool: 'Illustrator, Fireworks, 9Patch',
		},
		{
			title: 'SayCap 어플리케이션 로고',
			category: 'App / Application Logo',
			thumb: `${path}/img/app_saycapFav1_thumb.jpg`,
			image: `${path}/img/app_saycapFav1_img.jpg`,
			concept:
				'카메라 어플이자 녹음이 가능하여 다이어리처럼 쓸 수 있음을 나타내기 위해 디자인함.',
			size: 'mhdpi ~ xxxhdpi',
			tool: 'Photoshop, Illustrator',
		},
		{
			title: 'SayCap 로고',
			category: 'App / Logo',
			thumb: `${path}/img/app_saycapFav2_thumb.jpg`,
			image: `${path}/img/app_saycapFav2_img.jpg`,
			concept:
				'어플명인 SayCap의 철자 S,C를 정중앙에 배치하고 동그란 원과 점을 배치해 카메라 렌즈가 연상되게 디자인함.',
			size: 'hdpi ~ xxhdpi',
			tool: 'Illustrator',
		},
		{
			title: 'BAM 파비콘',
			category: 'App / Favicon',
			thumb: `${path}/img/app_bam_thumb.jpg`,
			image: `${path}/img/app_bam_img.jpg`,
			concept:
				'숙박 관리 프로그램의 파비콘으로, Hotel의 H와 프로그램명의 A를 활용해 숙박 업소를 떠오르게 하게끔 직관적으로 디자인을 함.',
			size: '256px * 256px',
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
		<Layout name={'app'} subTxt={'Application, Logo, Favicon'}>
			<div className='appList'>
				<h1>APP</h1>
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

export default Apps;
