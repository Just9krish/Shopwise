const Product = require("../models/product.model");
const isValid = require("mongoose").Types.ObjectId.isValid;

async function getAllProducts(req, res, next) {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function getProduct(req, res) {
  try {
    const id = req.params.id;

    if (!isValid(id)) {
      res.status(404).json({
        success: false,
        message: "Product is not found with given Id",
      });
    }
    const product = await Product.findOne({ id });

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product is not found with given id",
      });
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = {
  getAllProducts,
  getProduct,
};
