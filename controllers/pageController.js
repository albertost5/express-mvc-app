import { Travel } from '../models/Travel.js';

const index = (req, res) => {
    res.render('index', {
        title: 'Index'
    });
}

const destinations = async(req, res) => {
    let travels; 

    try {
        travels = await Travel.findAll();
    } catch (error) {
        console.log('Error retrieving all the travels: ', error);
        return;
    }
    
    res.render('destinations', {
        title: 'Next Destinations',
        travels
    });
}

const aboutUs = (req, res) => {
    res.render('about-us', {
        title: 'About Us'
    });
}

const contact =  (req, res) => {
    res.json('Contact')
}

const opinions = (req, res) => {
    res.render('opinions', {
        title: 'Opinions'
    })
}


export { 
    index,
    destinations,
    aboutUs,
    contact,
    opinions
}