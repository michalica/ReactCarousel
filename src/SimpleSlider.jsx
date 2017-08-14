import React from 'React';
import Slider from 'react-slick';



export default class SimpleSlider extends React.Component {

	constructor(props){
		super(props);
		this.state={number:0}
	}

	render () {
			const pictures=this.props.pictures[0].map(function (m,index) {
				return <img className="img-fluid" src={m} alt="" />
			});

		const settings = {

			draggable:true,
			arrows:true,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay:true,
			autoplaySpeed:3000
		};

		return (
			<div>
				<Slider {...settings}>
					{pictures}
				</Slider>
			</div>
		);
	}
}
