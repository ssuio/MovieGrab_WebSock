import { Meteor } from 'meteor/meteor';
import MovieGrab from './MovieGrab';
import test from './test';
let Future = Npm.require( 'fibers/future' ); 

console.log(MovieGrab);

Meteor.startup(() => {
	let Movies = new FilesCollection({
		collectionName: 'Movies',
		downloadRoute: 'movies/',
		storagePath: 'movies/',
	});

	Movies.allow({
	    insert: function() {
	      return true;
	    },
	    update: function() {
	      return false;
	    },
	    remove: function() {
	      return true;
	    }
	  });
	

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

	Meteor.publish('files.images.all', function () {
    	return Movies.collection.find({});
  	});



	// Usage:
	// Set cursor:
	let filesCursor = Movies.find().cursor;

	console.log('!!!!!!!!!!!!!');
	console.log(filesCursor.fetch());


});

