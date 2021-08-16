const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');


const port = 5000;
app.listen(port, console.log(`Server running on Port ${port}`))