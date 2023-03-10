const express = require("express");
const app = express()
const PORT = 8000;
const mongoose = require("mongoose")

const connectDB = require("./config/database")
require("dotenv").config({path: './config/.env'})
connectDB()

app.set("view engine", "ejs")
app.set(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));