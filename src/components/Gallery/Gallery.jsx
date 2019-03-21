import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Gallery.css';

import image1 from '../../assets/img/image1.jpg';
import image2 from '../../assets/img/image2.jpg';
import image3 from '../../assets/img/image3.jpg';

class Gallery extends Component {
	render() {
		return (
			<div className="GalleryWrapper">
				<div className="GalleryImageWrapper">
					<Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} swipeable={false}>
						<div><img src={image1} alt=""></img></div>
						<div><img src={image2} alt=""></img></div>
						<div><img src={image3} alt=""></img></div>
					</Carousel>
				</div>
			</div>
		);
	}
}

export default Gallery;