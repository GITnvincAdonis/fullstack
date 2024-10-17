const Pool = require("pg").Pool;
require('dotenv').config();

const urlDB = `postgresql://postgres:MQnoHiecvPTQzOusLbqcRPwGgYdqrNNI@autorack.proxy.rlwy.net:54083/railway`
const pool = new Pool(urlDB);

module.exports = pool;