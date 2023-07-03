const express = require("express")
const mongoose = require("mongoose")
const app = express()


mongoose.connect("mongodb://mongodb:27017/jobs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.listen(3080)