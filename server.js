if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors');

const db = require('./db');
const movieRouter = require('./routes/movie-router');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '15mb' })); //ref: https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0/45690436#45690436
app.use(cors());


app.get('/', (req, res) => {
	res.send('Papadam pazham payasam');
});

app.use('/api', movieRouter);

db.on('error', (error) => console.log('error connecting to db', error));
db.once('open', () => console.log('connected to db'));

app.listen(PORT, () => console.log(`server started on ${PORT}`));
