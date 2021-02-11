if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

console.log(process.env.DATABASE_URL);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: false, limit: '15mb'})); //ref: https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0/45690436#45690436
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('hello there');
});

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log('error connecting to db', err));
db.once('open', () => console.log('connected to db'));

app.listen(PORT, () => console.log(`server started on ${PORT}`));
