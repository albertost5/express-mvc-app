import express from 'express';
import router from './routes/index.js';
import 'dotenv/config';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

// Enable PUG
app.set('view engine', 'pug');

// Add router
app.use(router);

// Define port
const PORT = process.env.PORT || 3001;

app.listen( PORT, () => {
    console.log(`App listening on port ${PORT}..`);
});

