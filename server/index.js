const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const pool = require("./db");
const { parse } = require("dotenv");



app.use(cors({
    origin: 'https://skincare-application.netlify.app',
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
        const products = await pool.query("SELECT * FROM items")
        console.log(products.rows)
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/products/search/:string", async(req, res)=>{
    
    const searchString = `%${req.params.string}%`;
    try {
        const products = await pool.query("SELECT * FROM items WHERE name ILIKE $1 LIMIT 2",[searchString])
        console.log(products.rows)
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})

app.get("/products/:id", async(req, res)=>{
    const id = parseInt(req.params.id);
    try {
        const products = await pool.query("SELECT * FROM items WHERE id=$1",[id])
        console.log(products.rows)
        res.json(products.rows)
        
    } catch (error) {
        console.error(error.message)
    }
})

app.post("/products", async(req,res)=>{
    return res.send(201);
})

app.listen(process.env.DB_PORT,()=>{
    console.log(`server has started on port ${process.env.DB_PORT} `);
})