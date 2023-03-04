const express = require("express");
const multer = require("multer");
const path = require("path");

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("You can only upload images files"), false);
  }

  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

module.exports = upload;
