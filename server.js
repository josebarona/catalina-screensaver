const port = 1000;
const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(port, () => {
    const url = "http://localhost:" + port;
    console.log("p5 static server running:", url);
});
    