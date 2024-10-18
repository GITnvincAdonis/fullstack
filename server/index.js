const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const pool = require("./db");


app.use(cors({
    origin: 'https://skincare-application.netlify.app', // Replace with your frontend's origin in production
    methods: 'GET,POST,PUT,DELETE',
    
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