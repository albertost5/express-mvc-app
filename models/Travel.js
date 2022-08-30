import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Travel = db.define('Travel', {
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    fly_out: {
        type: DataTypes.DATE
    },
    fly_back: {
        type: DataTypes.DATE
    },
    image: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    availables: {
        type: DataTypes.INTEGER
    },
    slug: {
        type: DataTypes.STRING
    }
});