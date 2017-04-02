import React, { Component } from 'react';

export default class DownloadTable extends Component{
	getMovieList(){
		
	}
	
	render(){
		return(
			<div className="container">
				<div className="row row-centered">
					<div className="col-xs-6 col-xs-offset-4">
						<h1 className="">Movie Grab</h1>
						<table className="table">
						    <thead>
						      <tr>
						        <th className="col-xs-4">Name</th>
						        <th className="col-xs-1">Action</th>
						      </tr>
						    </thead>
						    <tbody>
						      <tr>
						        <td>John</td>
						        <td>
						        	<button className="btn btn-primary">Download</button>
					        	</td>
						      </tr>
						    </tbody>
						  </table>
					</div>
				</div>
			</div>
			);
	}
}