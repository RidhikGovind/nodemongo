import axios from 'axios'

// **make sure to change the PORT number to whatever is suitable at the time**
const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

//payload - means the data we are inputting from the UI
export const insertMovie = (payload) => api.post('/movie', payload)
export const getAllMovies = () => api.get('/movies')
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = (id) => api.delete(`/movie/${id}`)
export const getMovieById = (id) => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    getMovieById,
    deleteMovieById,
    updateMovieById
}

export default apis