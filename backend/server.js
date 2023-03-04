require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");

// app
const app = express();

// port & db string
const port = process.env.PORT || 3000;
const dbPath = process.env.DBPATH;

// middleware
app.use(cors());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// import routes
const productRoute = require("./routes/product.routes");

// routes
app.use("/", productRoute);

// mongoose
mongoose.set("strictQuery", false);
mongoose
  .connect(dbPath, { useNewUrlParser: true })
  .then(() =>
    app.listen(port, () => console.log(`Server is listening to ${port}`))
  )
  .catch((err) => console.log(err));
