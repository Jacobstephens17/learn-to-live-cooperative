import React from 'react'

import companyLogo from '../content/LearnToLiveCo-Operative.jpg'
import z1 from '../content/zoie1.JPG'
import Z from '../content/Z.jpg'
import food from '../content/food.JPG'
import plant from '../content/plant.JPG'
import plant2 from '../content/plant2.JPG'
import drive from '../content/drive.JPG'
import drive2 from '../content/drive2.JPG'
import food2 from '../content/food2.jpg'
import hospital from '../content/hospital.JPEG'
import mimi from '../content/M.jpg'
import directors from '../content/boardOfDirectors.JPG'
import jaleadeanne from '../content/jaleadeanne.jpg'




const imgUrls = [
    `${companyLogo}`,
    `${z1}`,
    `${food}`,
    `${plant}`,
    `${plant2}`,
    `${drive}`,
    `${drive2}`,
    `${hospital}`,
    `${food2}`,



];



class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);



const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	};
	
	return (
		<div className="image-slide" style={styles}></div>
	);
}


export default Carousel