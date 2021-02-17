const Movie = require('../models/movie-model');

createMovie = (req, res) => {
	const body = req.body;
    

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must input a movie',
		});
	}

	const movie = new Movie(body);

	if (!movie) {
		return res.status(400).json({ success: false, error: err });
	}

	movie
    .save()
    .then(() => {
		return res.status(201).json({
			success: true,
			id: movie._id,
			message: 'movie created',
		});
	})
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'movie not created'
        })
    })
};

updateMovie = async (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a body to update',
		});
	}

	Movie.findOne({ _id: req.params.id }, (err, movie) => {
		if (err) {
			return res.status(404).json({
				err,
				message: 'movie not found!',
			});
		}

		movie.name = body.name;
		movie.time = body.time;
		movie.rating = body.rating;
		movie.save().then(() => {
			return res
				.status(200)
				.json({
					success: true,
					id: movie._id,
					message: 'movie updated',
				})
				.catch((error) => {
					return res.status(404).json({
						err,
						message: 'movie not updated',
					});
				});
		});
	});
};

deleteMovie = async (req, res) => {
	await Movie.findByIdAndDelete({ _id: req.params.id }, (err, movie) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!movie) {
			return res.status(400).json({ success: true, error: 'movie not found' });
		}
	}).catch((err) => console.log('error while deleting movie', err));
};

getMovieById = async (req, res) => {
	await Movie.findOne({ _id: req.params.id }, (err, movie) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!movie) {
			return res.status(400).json({ success: true, error: 'movie not found' });
		}
		return res.status(200).json({ success: true, data: movie });
	}).catch((err) => console.log('error while finding movie', err));
};

getMovies = async (req, res) => {
	await Movie.find({}, (err, movies) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!movies.length) {
			return res.status(400).json({ success: true, error: 'movie not found' });
		}
		return res.status(200).json({ success: true, data: movies });
	}).catch((err) => console.log('No movies available', err));
};

module.exports = {
	createMovie,
	updateMovie,
	deleteMovie,
	getMovieById,
	getMovies,
};
