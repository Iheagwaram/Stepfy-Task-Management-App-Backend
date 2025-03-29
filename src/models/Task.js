const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId, 
        ref: "user", 
        required : true
    },
    title : {
        type : String, 
        required : true
    },
    category: {
        type : String
    },
    completed : {
        type : Boolean,
        default : false
    },
});

module.exports = mongoose.model("task", taskSchema);