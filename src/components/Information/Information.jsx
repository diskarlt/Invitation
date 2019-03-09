import React, { Component } from 'react';
import './Information.css';

class Information extends Component {
	render() {
		return (
			<div className="InformationWrapper">
				<div className="InformationBackground"/>
				<div className="InformationSpace"/>
				<div className="Information">
					<div className="InformationTitle">지정좌석</div>
					<div className="InformationContent">
						<div>소중한 분들을 조금 더 편안히 모시고자</div>
						<div>지정좌석으로 운영합니다.</div>
						<div>참석여부를 회신부탁드립니다.</div>
					</div>
				</div>
				<div className="InformationSpace"/>
				<div className="Information">
					<div className="InformationTitle">주차</div>
					<div className="InformationContent">
						<div>무료 발렛 서비스가 제공됩니다.</div>
						<div>주차 공간이 아주 넓지는 않으니</div>
						<div>대중교통 이용을 부탁드려요.</div>
					</div>
				</div>
				<div className="InformationSpace"/>
				<div className="Information">
					<div className="InformationTitle">화환</div>
					<div className="InformationContent">
						<div>화환은 정중히 사양합니다.</div>
					</div>
				</div>
				<div className="InformationSpace"/>
			</div>
		);
	}
}

export default Information;