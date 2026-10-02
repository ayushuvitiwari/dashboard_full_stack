const express = require('express');
const dotenv = require('dotenv')
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dashboardData")
.then(()=>{
     console.log("Mongodb connected");
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log("server is runing on port 3000");
    })
})