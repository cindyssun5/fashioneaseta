require('dotenv').config();
import express from 'express';
import path from 'path';
import morgan from 'morgan';

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(morgan('dev'));


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...\n`));
