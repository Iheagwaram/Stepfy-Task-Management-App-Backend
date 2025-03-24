const express = require('express');
const connectDB = require("./src/config/db");


const PORT = 4040;
const app = express();

connectDB(); //Database connection fn

app.use(express.json());
app.get("/api", (req, res) => {
    res.json({
        "message" : "Welcome to Stepfy's Rest Api"
    })
});

//Fn to start the server
app.listen(PORT, () => {
    console.log(`Server started successfully on Port:${PORT}`);
    
});