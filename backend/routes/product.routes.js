const express = require("express");
const upload = require("../controller/upload.controller");
const auth = require("../middleware/require.auth");

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
  editProduct,
  getProductCompanies,
  getProductColors,
  getProductsInColors,
  getProductsInCompany,
} = require("../controller/product.controller");

router.get("/", getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/trending", getTrendingProducts);
router.get("/categories/:category", getProductsInCategory);
router.get("/categories", getProductCategories);
router.get("/companies/:company", getProductsInCompany);
router.get("/companies", getProductCompanies);
router.get("/colors/:color", getProductsInColors);
router.get("/colors", getProductColors);
router.get("/:id", getProduct);

router.post("/", upload.array("images"), addProduct);

router.put("/:id", editProduct);
router.patch("/:id", editProduct);

router.delete("/:id", auth("admin"), deleteProduct);

module.exports = router;
