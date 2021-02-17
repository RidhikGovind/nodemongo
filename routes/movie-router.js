const express = require('express');

const MovieCtrl = require('../controllers/movie-ctrl');

const router = express.Router();

router.post('/movie', MovieCtrl.createMovie);
router.get('/movies', MovieCtrl.getMovies);
router.get('/movie/:id', MovieCtrl.getMovieById);
router.delete('/movie/:id', MovieCtrl.deleteMovie);
router.put('/movie/:id', MovieCtrl.updateMovie);

module.exports = router;
