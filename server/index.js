const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const pool = require("./db");

const allowedOrigins = ['http://localhost:5173', 'https://skincare-application.netlify.app'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      methods: 'GET,POST,PUT,DELETE',
      credentials: true,
    
  }));
app.use(express.json());

///routes
app.post("/products", async(req, res)=>{
    try {
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
})

app.get("/products", async(req, res)=>{
    try {
        const products = await pool.query("SELECT * FROM test_table")
        console.log(products.rows)
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})


app.listen(process.env.DB_PORT,()=>{
    console.log("server has started on port 5000");
})