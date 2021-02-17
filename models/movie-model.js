const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Note: you dont't need to use 'required' params anymore
const Movie = new Schema(
	{
		name: { type: String },
		time: { type: String },
		rating: { type: Number},
	},
	{ timestamps: true }
);


//the first param of mongoose.model is 'name of the collection', the second is the 'schema'
module.exports = mongoose.model('movies', Movie);
