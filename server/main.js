import { Meteor } from 'meteor/meteor';
import MovieGrab from './MovieGrab';
import test from './test';
let Future = Npm.require( 'fibers/future' ); 

console.log(MovieGrab);

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

