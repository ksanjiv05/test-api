require("dotenv").config()
const express = require("express");
const app = express();
require("./db")

app.listen(3001,()=>{
    console.log("server listen on 3001")
})