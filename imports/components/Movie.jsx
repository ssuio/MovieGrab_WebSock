import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import MovieGrab from '../lib/MovieGrab';
const movieLocation = 'D:\\MovieGrabLocation\\';


export const Movies = new FilesCollection({
		collectionName: 'Movies',
		// downloadRoute: '/files/movies',
		storagePath: 'upload/',
		
	});


if(Meteor.isServer){
	const uuidV4 = Npm.require('uuid/v4');

	new MovieGrab().getMovies((err, result)=>{
		result.map(file=>{
			console.log('ssuio');
			Movies.addFile( movieLocation + file, {
				fileName: file,
				type: '',
				fileId: uuidV4(),
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