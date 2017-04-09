import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';

import MovieList from './MovieList';
import { Movies } from './Movie';

export default class DownloadTable extends Component{
	constructor(){
		super();
		Meteor.call('getMovies', (err, result) => {
			this.setState({movies:result});
			console.log(result);

		});

		Meteor.subscribe('movies');

	}


	renderMovieList(){
			return (
				<div>
					{ this.state && this.state.movies ? 
						<table className="table">
						    <thead>
						      	<tr>
							        <th className="col-xs-3">Name</th>
							        <th className="col-xs-1">Size</th>
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
		   		{this.renderMovieList()}
			</div>
			);
	}
}

// <button onClick={this.clickHandler.bind(this)}>Click</button>
// 				<form ref="uploadForm" className="uploader" encType="multipart/form-data" onChange={this.handleChange}>
// 					<input ref="file" type="file" name="file1" className="uload-file" />
// 				</form>