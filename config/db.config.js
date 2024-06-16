require("dotenv").config();

module.exports = {
    dev: {
        username: process.env.DEV_DB_HOST,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOST,
        dialect: "mysql",
        logging: false
    },
    test: {
        username: process.env.TEST_DB_HOST,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        host: process.env.TEST_DB_HOST,
        dialect: "mysql",
        logging: false
    },

    production: {
        username: process.env.PROD_DB_HOST,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOST,
        dialect: "mysql",
        logging: false
    }
};