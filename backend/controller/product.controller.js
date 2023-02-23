const Product = require("../models/product.model");

async function getAllProducts(req, res, next) {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}

module.exports = {
  getAllProducts,
};
