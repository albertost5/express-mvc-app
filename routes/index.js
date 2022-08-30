import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/destinations', (req, res) => {
    res.render('destinations')
});

router.get('/opinions', (req, res) => {
    res.render('opinions')
});

router.get('/about-us', (req, res) => {
    res.render('about-us');
});

router.get('/contact', (req, res) => {
    res.json('Contact')
});

export default router;