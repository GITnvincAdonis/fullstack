const Pool = require("pg").Pool;
require('dotenv').config();


 const pool = new Pool({
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     host: process.env.DB_HOST,
     port: process.env.DB_PORT,
     database: process.env.DB_DATABASE,
   
 });
// const pool = new Pool({
//     user: "postgres",
//     password: "0129",
//     host: "localhost",
//     port: 5432,
//     database: "item_database",
   
// });

module.exports = pool;