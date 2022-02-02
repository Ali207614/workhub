require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { PORT } = require("./config");
const cors = require("cors");
const modules = require("./modules")

// middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(modules)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
}); 