import express from 'express';
import { addOpinion } from '../controllers/opinionController.js';
import { index, destinations, aboutUs, opinions, contact, destinationDetail } from '../controllers/pageController.js';

const router = express.Router();

router.get('/', index);

router.get('/destinations', destinations);
router.get('/destinations/:country', destinationDetail)

router.get('/opinions', opinions);
router.post('/opinions', addOpinion);

router.get('/about-us', aboutUs);

router.get('/contact', contact);

export default router;