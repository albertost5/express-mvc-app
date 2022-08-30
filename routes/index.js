import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Index'
    });
});

router.get('/destinations', (req, res) => {
    res.render('destinations', {
        title: 'Destinations'
    })
});

router.get('/opinions', (req, res) => {
    res.render('opinions', {
        title: 'Opinions'
    })
});

router.get('/about-us', (req, res) => {
    res.render('about-us', {
        title: 'About Us'
    });
});

router.get('/contact', (req, res) => {
    res.json('Contact')
});

export default router;