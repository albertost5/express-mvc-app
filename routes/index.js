import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    res.json(req.body);
});

router.get('/about-us', (req, res) => {
    res.render('about-us');
});

router.get('/contact', (req, res) => {
    res.json('Contact')
});

export default router;