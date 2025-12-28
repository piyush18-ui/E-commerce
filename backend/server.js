const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./backend/products.json";

app.get("/products", (req, res) => {
    const products = JSON.parse(fs.readFileSync(DATA_FILE));
    res.json(products);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
