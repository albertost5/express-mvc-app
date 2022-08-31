import express from 'express';
import { index, destinations, aboutUs, opinions, contact, destinationDetail } from '../controllers/pageController.js';

const router = express.Router();

router.get('/', index);

router.get('/destinations', destinations);
router.get('/destinations/:country', destinationDetail)

router.get('/opinions', opinions);

router.get('/about-us', aboutUs);

router.get('/contact', contact);

export default router;