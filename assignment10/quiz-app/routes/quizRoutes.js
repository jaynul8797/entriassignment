const express = require("express");
const router = express.Router();

// Test Route
router.get("/", (req, res) => {
    res.send("Quiz Routes Working!");
});

module.exports = router;