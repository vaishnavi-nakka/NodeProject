// var mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

// var genreSchema = mongoose.Schema({
//     _id:{
//         type: Number,
//         // required: true
//     },
//     name:{
//         type: String,
//         required: true
//     },
//     create_date:{
//         type: Date,
//         default: Date.now 
//     }
// },{
//     versionKey: false
// });

// genreSchema.plugin(AutoIncrement);

// var Genre = module.exports = mongoose.model('Genre',genreSchema);

// module.exports.getGenres = function(callback, limit){
//     Genre.find(callback).limit(limit);
// }

// module.exports.addGenre = function(genre, callback){
//     Genre.create(genre, callback);
// }

// module.exports.getGenreById = function(id, callback){
//     Genre.findById(id,callback);
// }


// //update genre
// module.exports.updateGenre = function(id, genre, options, callback){
//     var query = {_id: id};
//     var update = {
//         name: genre.name
//     }
//     Genre.findOneAndUpdate(query, update, options,);
// }

