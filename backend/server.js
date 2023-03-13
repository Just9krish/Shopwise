require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
const multer = require("multer");

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
const userRoute = require("./routes/user.routes");

// routes
app.use("/api/products", productRoute);
app.use("/api/user", userRoute);

// error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something is wrong!");
});

// mongoose
mongoose.set("strictQuery", false);
mongoose
  .connect(dbPath, { useNewUrlParser: true })
  .then(() =>
    app.listen(port, () => console.log(`Server is listening to ${port}`))
  )
  .catch((err) => console.log(err));

// handling multer error if provided more than 5 images
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(400).json({ success: false, message: err.message });
  } else {
    next();
  }
});
