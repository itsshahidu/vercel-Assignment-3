const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const router = require("./routes/route");
const connect = require('./config/database')

app.use(express.json());
app.use(cors());
app.use(router);
connect()

const { PORT } = process.env;

app.get('/products', (req, res) =>{
	res.send('Api Running')
})

app.get('/shahid', (req, res) =>{
	console.log('This is project is created by Shahid Ullah')
})

app.listen(PORT, () => {
	console.info(`Server listening is on PORT This is shahid ${PORT}`);
});
