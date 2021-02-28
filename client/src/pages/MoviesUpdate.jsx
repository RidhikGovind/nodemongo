import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

function MoviesUpdate() {
	const [name, setName] = useState('');
	const [rating, setRating] = useState('');
	const [time, setTime] = useState('');
	// const [id, setId] = useState('');
	const { id } = useParams();




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

	const handleUpdateMovie = () => {
		const payload = {name, rating,time};

		api.updateMovieById(id,payload).then(res => {
			window.alert('movie updated successfully')
			setName('')
			setTime('')
			setRating('')
		})
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
				<button type='submit' onClick={handleUpdateMovie}>
					Update Movie
				</button>
				<button type='button'>
					<a href={'/movies/list'}>Cancel</a>
				</button>
			</form>
		</div>
	);
}

export default MoviesUpdate;
