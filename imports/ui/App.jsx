import React, { Component } from 'react';

import DownloadTable from '../components/DownloadTable';

export default class App extends Component {
	render(){
		return(
			<div className="container">
				<div className="row row-centered">
					<div className="col-xs-6 col-xs-offset-3">
						<h1 className="">Movie Grab</h1>
							<DownloadTable />
					</div>
				</div>
			</div>
		);
	}

}
