const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let products = [];

// Create a new product
app.post("/products", (req, res) => {
    const product = { id: products.length + 1, ...req.body };
    products.push(product);
    res.status(201).json(product);
});

// Display all products
app.get("/products", (req, res) => {
    res.json(products);
});

// Display a specific product by ID
app.get("/products/:id", (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    product ? res.json(product) : res.status(404).json({ message: "Product not found" });
});

// Update a product by ID
app.put("/products/:id", (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// Delete a product by ID
app.delete("/products/:id", (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.json({ message: "Product deleted successfully" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});