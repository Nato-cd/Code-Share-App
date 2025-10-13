const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());

const snippetsArray = [];

app.post("/test", (req, res) => {
    console.log("Snippet reçu :", req.body);
    snippetsArray.push(req.body);
    console.log("Tableau actuel :", snippetsArray);
    res.json({ message: "ok" });
});


app.get("/snippets", (_req, res) => {
    res.json(snippetsArray);
});


app.listen(port, () => {
    console.log(`Server démarré sur http://localhost:${port}/`);
});
