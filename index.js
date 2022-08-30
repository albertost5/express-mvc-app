import express from 'express';
import router from './routes/index.js';
import 'dotenv/config';

const app = express();


// Enable PUG
app.set('view engine', 'pug');

// Middlewares
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use( (req, res, next) => {
    res.locals.currentYear = new Date().getFullYear();
    return next();
});

// Add router
app.use(router);

// Define port
const PORT = process.env.PORT || 3001;


app.listen( PORT, () => {
    console.log(`App listening on port ${PORT}..`);
});

