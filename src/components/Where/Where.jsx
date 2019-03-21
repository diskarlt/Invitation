import React, { Component } from 'react';
import './Where.css'

import map from '../../assets/img/image_1515741933680_750.jpg'

function createMap() {
	return {__html: '<table cellpadding="0" cellspacing="0" width="272"> <tr> <td style="border:1px solid #cecece;"><a href="https://map.naver.com/?searchCoord=c28dc842ef2cd281b79bbe09d411558f1f0c8e7d9e13f494702883d632e1a321&query=7JWE7YyM7Yq466i87Yq4OTk%3D&menu=location&tab=1&lng=6cd148a8306c3f23ca2dc2512444e6b9&__fromRestorer=true&mapMode=0&mpx=9fd35c2cb0b0ae0c918840523aaca4a62814c01a8fe37f0b5696ebdb50d6ee4d25316721452081c166d417c333db5b38&lat=971a8b43525a3c41c029dddeb7f40db9&dlevel=12&enc=b64" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1552110395659_-1021136548" width="270" height="160" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a></td> </tr> <tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style="padding-left:9px; border-left:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="font-family: tahoma; font-size: 11px; color:#666;">2019.3.9</span>&nbsp;<span style="font-size: 11px; color:#e5e5e5;">|</span>&nbsp;<a style="font-family: dotum,sans-serif; font-size: 11px; color:#666; text-decoration: none; letter-spacing: -1px;" href="https://map.naver.com/?searchCoord=c28dc842ef2cd281b79bbe09d411558f1f0c8e7d9e13f494702883d632e1a321&query=7JWE7YyM7Yq466i87Yq4OTk%3D&menu=location&tab=1&lng=6cd148a8306c3f23ca2dc2512444e6b9&__fromRestorer=true&mapMode=0&mpx=9fd35c2cb0b0ae0c918840523aaca4a62814c01a8fe37f0b5696ebdb50d6ee4d25316721452081c166d417c333db5b38&lat=971a8b43525a3c41c029dddeb7f40db9&dlevel=12&enc=b64" target="_blank">지도 크게 보기</a> </td> <td width="98" bgcolor="#f9f9f9" align="right" style="text-align:right; padding-right:9px; border-right:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="float:right;"><span style="font-size:9px; font-family:Verdana, sans-serif; color:#444;">&copy;&nbsp;</span>&nbsp;<a style="font-family:tahoma; font-size:9px; font-weight:bold; color:#2db400; text-decoration:none;" href="http://www.nhncorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>'};
}

class Where extends Component {
	render() {
		return (
			<div className="WhereWraper">
				<div className="Where">
					<div className="WhereHeaderTitle">오시는 길</div>
					<div className="WhereHeaderContent">
						<div>주택가에 위치해 다소 찾기 어려우니,</div>
						<div>오시는 길을 꼭 참고하여 참석해주세요.</div>
					</div>
					<div className="WhereMapWrapper">
						<img className="WhereMap" src={map} alt="map"/>
					</div>
					<div className="WhereDetail">
						<div className="WhereTitle">아파트먼트99</div>
					</div>
					<div className="WhereDetail">
						<div className="WhereTitle">전화</div>
						<div className="WhereContent">02-557-5456</div>
					</div>
					<div className="WhereDetail">
						<div className="WhereTitle">주소</div>
						<div className="WhereContent">서울시 강남구 봉은사로 68길 35-3 (삼성동 123-22)</div>
					</div>
					<div className="WhereDetail">
						<div className="WhereTitle">내비게이션, 스마트폰</div>
						<div className="WhereContent">강남구 삼성동 123-21(포엠빌딩)로 찾으시면 편리합니다.</div>
					</div>
					<div className="WhereDetail">
						<div className="WhereTitle">주차</div>
						<div className="WhereContent">발렛 서비스 (무료)</div>
					</div>
					<div className="WhereDetail">
						<div className="WhereTitle">지하철</div>
						<div className="WhereContent">9호선 삼성중앙역 7번 출구</div>
					</div>
					<div className="WhereDetail">
						<div className="WhereTitle">걸어오시는 방법</div>
						<div className="WhereContent">
							<div>7번 출구에서 280M(도보5분) 직진</div>
							<div>소람한방병원을 끼고 좌회전</div>
							<div>공원둘레길을 따라 270M(도보5분) 직진</div>
							<div>붉은벽돌건물과 우유랑카페건물 사이 골목으로 들어오세요.</div>
							<div>아파트먼트99 도착</div>
							<div>(은혜교회를 지나면 안돼요.)</div>
						</div>
					</div>
					<div className="WhereMapWrapper" dangerouslySetInnerHTML={createMap()}/>
				</div>
			</div>
		);
	}
}

export default Where;