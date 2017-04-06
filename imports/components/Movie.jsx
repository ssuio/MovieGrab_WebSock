import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import MovieGrab from './MovieGrab';
const movieLocation = 'D:\\MovieGrabLocation\\';
const uuidV4 = Npm.require('uuid/v4');

export const Movies = new FilesCollection({
		collectionName: 'Movies',
		// downloadRoute: '/files/movies',
		storagePath: 'upload/',
		
	});


if(Meteor.isServer){

	new MovieGrab().getMovies((err, result)=>{
		result.map(file=>{
			Movies.addFile( movieLocation + file, {
				fileName: file,
				type: '',
				fileId: uuidV4();,
				meta: {}
			});
		});
		
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

	Movies.allowClient();



	// Usage:
	// Set cursor:
	let filesCursor = Movies.find();

	Meteor.publish('movies', function () {
    	return filesCursor.cursor;
  	});

}