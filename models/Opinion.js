import { DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Opinion = db.define('Opinion', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.TEXT
    }
});
