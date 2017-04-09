import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
const domain = 'ssuio.idv.tw:3000'


export default class MovieList extends Component{
	
	clickHandler(){
		console.log(this.props.movie);
	}
	
	render(){
		return(
		      <tr>
		        <td>{this.props.movie.name}</td>
		        <td>{this.props.movie.size}</td>
		        <td>
		        	<a href={this.props.movie.downloadUrl.replace('localhost:3000', domain)} download={this.props.movie.name}><button className="btn btn-primary">Download</button></a>
	        	</td>
		      </tr>
			);
	}
}