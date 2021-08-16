const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = require('./app');


const port = 3002;
app.listen(port, console.log(`Server running on Port ${port}`))