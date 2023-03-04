const express = require("express");
const upload = require("../controller/upload.controller");

const router = express.Router();

const {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  getFeaturedProducts,
  getTrendingProducts,
  getProductCategories,
  getProductsInCategory,
} = require("../controller/product.controller");

router.get("/", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/trending", getTrendingProducts);
router.get("/categories", getProductCategories);
router.get("/categories/:category", getProductsInCategory);
router.get("/:id", getProduct);

router.post("/", upload.array("images"), addProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
