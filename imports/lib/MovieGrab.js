import fs from 'fs';
import { Movies } from '../components/Movie';
const moviesPath = 'H:\\testLocation';
const movieLocation = 'H:\\testLocation\\';

export default class MovieGrab{

	getMovies(cb){
			fs.readdir(moviesPath, (err, result)=>{
				let movies = {};
				let count = 1;
				if (err) {
			        throw new Meteor.Error('error');
			    }



			    let moviesArr = [];
			 	// cb(err, result);

				result.map(file=>{
					let movieObj = {};
					movieObj.name = file;

					Movies.addFile( movieLocation + file, {
							fileName: file,
							// type: '',
							// fileId: uuidV4(),
							meta: {}
						}, (err, fileRef)=>{
							movieObj.downloadUrl = Movies.findOne({name:file}).link();
							moviesArr.push(movieObj);

							if(count == result.length){
								return cb(err , moviesArr);
							}
							count++;
						});
					// console.log(Movies.find().get());
				});
				
			});

	}

}