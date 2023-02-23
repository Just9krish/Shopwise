const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// app
const app = express();

// port
const port = process.env.PORT || 3000;

// middleware
app.use(cors());

// import routes
const productRoute = require("./routes/product.routes");

// routes
app.use("/", productRoute);
