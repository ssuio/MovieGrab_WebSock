import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';

import MovieList from './MovieList';
import { Movies } from './Movie';

export default class DownloadTable extends Component{
	constructor(){
		super();
		// Meteor.call('getMovies', (err, result) => {
		// 	this.setState({movies:result});

		// });

		Meteor.subscribe('movies');

	}

	clickHandler(){
		// Movies.find().remove((err)=>{
		// 	if(err)
		// 		console.log('error!');
		// });

		Movies.find().forEach((file)=>{
			if(file)
				console.log(file);
		});

		// console.log(Movies.findOne({name:'D:/MovieGrabLocation/flower.jpg'}).link());
		// console.log(Movies.findOne({}).link());

		this.setState({imageUrl: Movies.findOne({}).link() });
		// console.log(Movies.findOne().link());
		// window.open(Movies.findOne().link() + '?download=true', 'Download'); 
	}

	renderMovieList(){
			return (
				<div>
					<a href={this.state && this.state.imageUrl? this.state.imageUrl : ''}>FFF</a>
					{ this.state && this.state.movies ? 
						<table className="table">
						    <thead>
						      	<tr>
							        <th className="col-xs-3">Name</th>
							        <th className="col-xs-1">Action</th>
						      	</tr>
						    </thead>
						   	<tbody>
					   		{
					   			this.state.movies.map((movie, idx)=> (
									<MovieList key={idx} movie={movie}/>
								))
							}
						   	</tbody>
					  	</table>
				  	 : 
					  	<h1> Loading...</h1>
					}
				</div>
			);
	}
	
	render(){
		return(
			<div>
				<button onClick={this.clickHandler.bind(this)}>Click</button>
				<form ref="uploadForm" className="uploader" encType="multipart/form-data" onChange={this.handleChange}>
					<input ref="file" type="file" name="file1" className="uload-file" />
				</form>
		   		{this.renderMovieList()}
			</div>
			);
	}
}