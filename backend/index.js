const express = require("express")

const cors = require("cors")
const { connectDb } = require("./config/db");
require('dotenv').config()

const app = express()

app.listen(`${process.env.PORT}`, async() => {
    await connectDb();
    console.log("MedixAI api listing on PORT : ",`${process.env.PORT}`);
})

app.use(express.json())
app.use(cors());


app.get("/",(req,res) => {
    return res.status(200).send({message : "welcome to MedixAI",status:true})
})

const authRouters = require("./routes/auth.route.js");
app.use("/auth", authRouters);

module.exports = app;