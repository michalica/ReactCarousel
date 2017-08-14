import React from 'react';
import '../styles/index.scss';

import Itemcar from './Itemcar';

export default class App extends React.Component {

	constructor(props){
		super(props);

		this.state={item:0};
		this.clickHandler=this.clickHandler.bind(this);
	}
	clickHandler(index){

		this.setState({item:index});
	}

  render() {


		return (
      <div>
				<div className="container-fluid">
     			<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="text-center">Featured gyms and clubs</h1>
								<div className="row">
									{
										this.props.carousel.data.map( (m,index) => {

											if(this.state.item == index){
												return <div index={index} onClick={this.clickHandler.bind(this,index)} className="selected col-md-3 text-center menu-item align-middle">{m.Name}</div>;

											}else {
												return <div index={index} onClick={this.clickHandler.bind(this,index)} className="col-md-3 text-center menu-item align-middle">{m.Name}</div>;
											}

										})
									}
									</div>
								<Itemcar selected={this.state.item} data={ this.props.carousel.data[this.state.item] } />
							</div>
						</div>
					</div>
				</div>
      </div>
    )
  }
}
