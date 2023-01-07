require('dotenv').config();

module.exports = function() {
    return {
        "environment": process.env.ENVIRONMENT,
        "db_host": process.env.DB_HOST,
        "db_user": process.env.DB_USER,
        "db_password": process.env.DB_PASSWORD
    }
};