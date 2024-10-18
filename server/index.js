const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const pool = require("./db");



app.use(cors({
    origin: 'https://skincare-application.netlify.app/',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
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
    console.log(`server has started on port ${process.env.DB_PORT} `);
})