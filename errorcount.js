const express = require("express");
const app = express();
let errcount = 0;

app.get('/user', function (req, res) {
    throw new Error("user not found");
});

app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

app.get('/errcount', function (req, res) {
    res.status(200).json({ errorCount: errcount });
});

// Error-handling middleware
app.use(function (err, req, res, next) {
    errcount += 1;
    res.status(500).json({ error: err.message });
});

app.listen(3000);

module.exports = app;
