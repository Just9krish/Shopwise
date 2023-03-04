const express = require("express");
const upload = require("../controller/upload.controller");

const router = express.Router();

const {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
} = require("../controller/product.controller");

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", upload.array("images"), addProduct);
router.post("/:id", deleteProduct);

module.exports = router;
