import React, { useState } from 'react';
import api from '../api';

function MoviesList() {
	const [name, setName] = useState('');
	const [rating, setRating] = useState('');
	const [time, setTime] = useState('');

	const handleChangeInputName = (e) => {
		const inputName = e.target.value;
		setName(inputName);
	};

	const handleChangeInputRating = (e) => {
		const inputRating = e.target.value;
		setRating(inputRating);
	};

	const handleChangeInputTime = (e) => {
		const inputTime = e.target.value;
		setTime(inputTime);
	};

	const handleAddMovie = async (e) => {
		const payload = { name, rating, time };

		await api.insertMovie(payload).then((res) => {
			window.alert('Movie successfully created');
			console.log('movie created')
			setName('');
			setRating('');
			setTime('');
		});
	};

	return (
		<div>
			<h2>Create a movie</h2>

			<form>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					value={name}
					onChange={handleChangeInputName}
					required
				/>

				<label htmlFor='rating'>Rating</label>
				<input
					type='number'
					name='rating'
					value={rating}
					onChange={handleChangeInputRating}
					min='0'
					max='10'
					pattern='[0-9]'
					required
				/>

				<label htmlFor='time'>Time(Hrs)</label>
				<input
					type='text'
					name='time'
					value={time}
					onChange={handleChangeInputTime}
					required
				/>
				<button type='submit' onClick={handleAddMovie}>
					Add Movie
				</button>
				<button type='button'>
					<a href={'/movies/list'}>Cancel</a>
				</button>
			</form>
		</div>
	);
}

export default MoviesList;
