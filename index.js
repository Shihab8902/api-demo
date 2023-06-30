require("dotenv").config();
const mongoose = require('mongoose');
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT;
const databaseURL = "mongodb+srv://shihab8902:shihab@cluster0.46sshii.mongodb.net/users";

app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectDB();
});

app.get("/", (req, res)=>{
    res.status(200).send("Server is running......");
});

app.get("/users", async (req, res)=>{
    try {
        const x = await user.find();
        res.status(200).send({
            message: "Success",
            data: x
        })

    } catch (error) {
        res.status(500).send({
            message: "Failed",
            data: error.message
        })
    }
});


const connectDB = async() =>{
    try {
        await mongoose.connect(databaseURL);
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}


const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const user = mongoose.model("user", userSchema);