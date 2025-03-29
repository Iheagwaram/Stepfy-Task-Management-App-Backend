const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");


const PORT = 4040;
dotenv.config();
const app = express();

connectDB(); //Database connection fn

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/tasks", require("./src/routes/taskRoutes"));

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