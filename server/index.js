const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors");
const pool = require("./db");


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


app.listen(process.env.DB_PORT,()=>{
    console.log("server has started on port 5000");
})