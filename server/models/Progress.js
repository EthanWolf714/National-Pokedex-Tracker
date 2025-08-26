const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    region: {type: String, required: true},
    caught: [String] 
});

module.exports = mongoose.model("Progress", progressSchema);