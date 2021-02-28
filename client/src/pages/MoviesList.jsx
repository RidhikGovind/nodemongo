import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';

import api from '../api';

function Table({ columns, data }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data });

	return (
		<table {...getTableProps}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

function DeleteMovie({ props }) {

	const deleteUser = () => {
		const id = props.row.original._id;
		console.log(id);
		if(window.confirm(`Do you want to delete the movie with ${id} permanently?`)){
			api.deleteMovieById(id);
			window.location.reload();
		}
	};
	return <div onClick={deleteUser}>Delete</div>;
}

function UpdateMovie({props}) {
	const updateUser = () => {
		const id = props.row.original._id;
		console.log(id)
		window.location.href = `/movies/update/${id}`
	}
	return(
		<div onClick={updateUser}>Update</div>
	)
}

//main-function
function MoviesList() {
	const [movies, setMovies] = useState([]);

	// const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		// setIsLoading(true);

		await api.getAllMovies().then((movies) => {
			// console.log(movies.data);
			const data = movies.data.data;
			// const loop = data.forEach((movie) => {
			// 	console.log(movie);
			// });

			setMovies(data);
			// setIsLoading(false);
			// setMovies(movies.data.data);
		});
	};

	

	const columns = useMemo(
		() => [
			{
				Header: 'ID',
				accessor: '_id',
				filterable: true,
			},
			{
				Header: 'Name',
				accessor: 'name',
				filterable: true,
			},
			{
				Header: 'Rating',
				accessor: 'rating',
				filterable: true,
			},
			{
				Header: 'Time',
				accessor: 'time',
				
			},
			{
				Header: '',
				accessor: 'createdAt',
				Cell: (props) => {
					return (
						<span>
							<DeleteMovie props={props} />
						</span>
					);
				},
			},
			{
				Header: '',
				accessor: '__v',
				Cell: (props) => {
					return (
						<span>
							<UpdateMovie props={props} />
						</span>
					);
				},
			},
		],
		[]
	);

	return <Table columns={columns} data={movies} />;
}

export default MoviesList;
