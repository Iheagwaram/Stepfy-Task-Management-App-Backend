const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI),
        console.log(`MongoDB connection successful`);
        
    } catch (error) {
        console.log(`MongoDB connection failed`);
    }
};

module.exports = connectDB;