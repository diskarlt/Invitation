import React, { Component } from 'react';
import './When.css';

import image from '../../assets/img/image_1515745345693_750.png';

class When extends Component {
	render() {
		return (
			<div className="WhenWrapper">
				<div className="WhenTime">• 2019년 6월 1일 토요일 오후 12시 •</div>
				<div className="WhenName">
					<div>홍지웅 그리고 김은아</div>
				</div>
				<div className="WhenText">
					<div>인생에서 가장 아름답고 행복한 순간,</div>
					<div>우리의 작은 결혼식에 초대합니다.</div>
					<div>저희의 소중한 날에 참석하셔서</div>
					<div>설레는 시작의 순간을 함께 해 주세요.</div>
				</div>
				<div className="WhenImageWrapper">
					<img className="WhenImage" src={image} alt=""/>
				</div>
			</div>
		);
	}
}

export default When;