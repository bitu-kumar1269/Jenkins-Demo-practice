const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Jenkins CI/CD Pipeline!");
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});

// this is a simple Node.js application that serves a message at the root URL. It listens on port 4000. You can run this application using `node app.js` and access it at `http://localhost:4000/`.