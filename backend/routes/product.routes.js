const express = require("express");
const upload = require("./upload.routes");

const router = express.Router();

const {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
} = require("../controller/product.controller");

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", upload.single("image"), addProduct);
router.post("/:id", deleteProduct);

module.exports = router;
