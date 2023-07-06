const express = require("express")
const mongoose = require("mongoose")
const jobRouter =  require("./routes/jobs")

const app = express()


mongoose.connect("mongodb://db:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });


app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    const jobs = [{
        title: "first job",
        createdAt: new Date(),
        description: "This is a awesome job description"
    },
        {
            title: "second job",
            createdAt: new Date(),
            description: "This is a awesome job description"
        }]
    // res.render("jobs/index", {jobs: jobs})
    res.send({jobs: jobs})
})

app.use('/jobs', jobRouter)

app.listen(3080)