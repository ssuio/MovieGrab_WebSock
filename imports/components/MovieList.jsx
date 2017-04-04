import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class MovieList extends Component{
	
	
	render(){
		return(
		      <tr>
		        <td>{this.props.movie}</td>
		        <td>
		        	<button className="btn btn-primary">Download</button>
	        	</td>
		      </tr>
			);
	}
}