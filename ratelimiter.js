const express = require("express");
const app = express();

let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
    const userId = req.headers['user-id'];

    if (!userId) {
        return res.status(400).send("Missing user-id header");
    }

    if (numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId]++;
        if (numberOfRequestsForUser[userId] > 5) {
            return res.status(429).send("Too many requests - no entry");
        }
    } else {
        numberOfRequestsForUser[userId] = 1;
    }

    next();
});

app.get("/", (req, res) => {
    res.send("You are allowed!");
});

app.listen(3000);
