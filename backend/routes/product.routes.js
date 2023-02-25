const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
} = require("../controller/product.controller");

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.post("/:id", deleteProduct);

module.exports = router;
