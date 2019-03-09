import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="FooterWrapper">
				<div className="FooterBackground"/>
				<div className="Footer">
					<div className="FooterTitle">"행복한 날, 곧 뵙겠습니다."</div>
					<div className="FooterContent">모두가 행복한 곳, 아파트먼트99</div>
				</div>
			</div>
		);
	}
}

export default Footer;