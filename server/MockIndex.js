const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const pool = require("./MockDB");



app.use(cors());

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
        const products = await pool.query("SELECT * FROM item")
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
    console.log(req.body)
    return res.send(201);
})

app.listen(5000,()=>{
    console.log(`server has started on port ${5000} `);
})