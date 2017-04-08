import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import '../imports/components/Movie';
import MovieGrab from '../imports/lib/MovieGrab';
let Future = Npm.require( 'fibers/future' ); 

Meteor.startup(() => {
	
	

	Meteor.methods({
	  getMovies(){
	  	//Future
	  	// let future = new Future;
	  	// new MovieGrab().getMovies((status, movies)=>{
	  	// 	return future.return(movies);
	  	// });
  		// return future.wait();
  		

  		let asyncFun = Meteor.wrapAsync(new MovieGrab().getMovies);
  		let result = asyncFun();
  		return result;
	  },
	});



});

