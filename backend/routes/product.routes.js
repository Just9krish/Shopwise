const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controller/product.controller");

router.get("/", getAllProducts);
router.get("/:id");
router.post("/");
