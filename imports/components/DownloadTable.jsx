import React, { Component } from 'react';

import MovieList from './MovieList';

export default class DownloadTable extends Component{
	constructor(){
		super();
		Meteor.call('getMovies', (err, result) => {
			this.setState({movies:result});

		});

		Meteor.subscribe('files.images.all');

		
	}

	renderMovieList(){
			// if(this.state && this.state.movies)
			// return this.state.movies.forEach((item, index, array)=>(
			// 		<MovieList key={index} movie={item} />
			// ));
			// else
			// return <h1>Loading</h1>;
			if(this.state && this.state.movies){
				return this.state.movies.map((movie, idx)=> (
					<MovieList key={idx} movie={movie} />)
				);
			}else{
				return <MovieList key='none' movie='none' />;
			}

			

		
		// const result = ['a','b','c'];

		// return result.map((movie)=>(
		// 			<MovieList key="" movie={movie}/>
		// 		));
	}
	
	render(){
		return(
			<div>
				<table className="table">
				    <thead>
				      <tr>
				        <th className="col-xs-3">Name</th>
				        <th className="col-xs-1">Action</th>
				      </tr>
				    </thead>
				   	<tbody>
				   		<MovieList movie="hi"/>
				   		{this.renderMovieList()}
				   	</tbody>
				  </table>
			</div>
			);
	}
}