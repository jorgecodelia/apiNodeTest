import express from 'express';
import bodyParser from 'body-parser';
import { configureRoutes } from './controllers/index.js';

const app = express();
const port = 3000; 
const router = express.Router();

app.use(bodyParser.json());
app.use(configureRoutes(router));
app.listen(port, () => console.log(`Server running on port ${port}`));