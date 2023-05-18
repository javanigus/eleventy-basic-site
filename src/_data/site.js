const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

module.exports = function() {
    return {
        "environment": process.env.ENVIRONMENT,
        "db_host": process.env.DB_HOST,
        "db_user": process.env.DB_USER,
        "db_password": process.env.DB_PASSWORD
    }
};