/**
 * Created by Tomáš on 14.08.2017.
 */
import React from 'react';

import SimpleSlider from './SimpleSlider';

export default class Itemcar extends React.Component{

	constructor(props){
		super(props);
		this.state={ number:0 }
	}

	render(){
		// this.setState({number: this.props.selected});

		return (
			<div className="slider_cont">
				<a className="link" href="#">See All Clubs and Gyms in {this.props.data.Name} -></a>
				<div className="slider">
						<div className="dark_overlay">
							<div className="featured">FEATURED</div>
							<div className="content">
								<h3>
									{this.props.data.Headline}
								</h3>
								<p>
									{this.props.data.Address}
								</p>
								<p>
									{this.props.data.Hours}
								</p>
							</div>
							<div className="details">
								<a  href="#">Club Details -> </a>
							</div>
						</div>


					<SimpleSlider selected={this.state.number} pictures={this.props.data.pictures} />

				</div>

			</div>

		);

	}
}

