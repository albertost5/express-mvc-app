import { Opinion } from '../models/Opinion.js';
import { Travel } from '../models/Travel.js';

const index = async(req, res) => {
    let travels;
    let opinions;
    // Get 3 travels
    try {
        travels = await Travel.findAll({ limit: 3});
        opinions = await Opinion.findAll({ limit: 3});
    } catch (error) {
        console.log('Error retrieving the data: ', error);
        return;
    }

    res.render('index', {
        title: 'Index',
        class: 'home',
        travels,
        opinions
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

const destinationDetail = async(req, res) => {
    const { country } = req.params;
    let travel; 

    if( !country ) {
        console.log('There was not a country as param..');
        return;
    }
    
    try {
        travel = await Travel.findOne({ where: { image: country } });
    } catch (error) {
        console.log(`Error retrieving the information of ${country}: `, error);
        return;
    }

    res.render('travel', {
        title: travel.title,
        travel
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

const opinions = async(req, res) => {
    try {
        const opinions = await Opinion.findAll();
        
        res.render('opinions', {
            title: 'Opinions',
            opinions
        });
    } catch (error) {
        console.log('Error retrieving all the opinions: ', error);
        return;
    }
}

export { 
    index,
    destinations,
    aboutUs,
    contact,
    opinions,
    destinationDetail
}