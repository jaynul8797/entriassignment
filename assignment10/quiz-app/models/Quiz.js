const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    title: String,
    questions: Array, 
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quiz", QuizSchema);