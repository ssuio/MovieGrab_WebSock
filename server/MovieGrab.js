import fs from 'fs';
const moviesPath = 'H:\\MovieGrabLocation';

export default class MovieGrab{

	getMovies(cb){
			fs.readdir(moviesPath, (err, result)=>{
				let movies = {};
				let count = 1;
				if (err) {
			        throw new Meteor.Error('error');
			    }
			 	cb(err, result);

				// result.map(file=>{
				// 	movies[count+''] = file;
				// 	if(count == result.length){
				// 		return cb(err , movies);
				// 	}
				// 	count++;
				// });
				
			});
	}

}