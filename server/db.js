const Pool = require("pg").Pool;
require('dotenv').config();
const pool = new Pool({
    user: "postgres",
    password: "0129",
    host: "localhost",
    port: 5432,
    database: "item_database"

});

module.exports = pool;