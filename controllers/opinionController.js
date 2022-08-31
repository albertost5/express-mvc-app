import { Opinion } from "../models/Opinion.js";

const addOpinion = async(req, res) => {
    const { name, email, message } = req.body;

    const errors = [];

    if ( name.trim() == '' ) {
        errors.push('Name field is empty.');
    } 
    if ( email.trim() == '' ) {
        errors.push('Email field is empty.');
    }
    if ( message.trim() == '' ) {
        errors.push('Message field is empty.');
    }
    
    if( errors.length > 0 ) {
        res.render('opinions', {
            title: 'Opinions',
            errors,
            name,
            email,
            message
        });
        return; 
    } else {

        try {
            await Opinion.create({
                name,
                email,
                message
            });
            res.redirect('/opinions');
        } catch (error) {
            console.log('Error creating a new opinion: ', error);
            return;
        }
    }
}

export {
    addOpinion
}