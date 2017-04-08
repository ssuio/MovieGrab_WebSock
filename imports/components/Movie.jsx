import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import MovieGrab from '../lib/MovieGrab';
const movieLocation = 'H:\\testLocation\\';


export const Movies = new FilesCollection({
		collectionName: 'Movies',
		// downloadRoute: '/files/movies',
		storagePath: 'upload/',
		
	});


if(Meteor.isServer){

	Movies.allow({
	    insert: function() {
	      return true;
	    },
	    update: function() {
	      return false;
	    },
	    // remove: function() {
	    //   return true;
	    // }
	  });

	Movies.allowClient();



	// Usage:
	// Set cursor:
	let filesCursor = Movies.find();

	Meteor.publish('movies', function () {
    	return filesCursor.cursor;
  	});

}