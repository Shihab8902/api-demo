require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});

app.get("/", (req, res)=>{
    res.status(200).sendFile(__dirname + "/views/indec.html");
});

app.get("/users", (req, res)=>{
    res.status(200).send("This is the users route")
});