const Product = require("../models/product.model");
const isValid = require("mongoose").Types.ObjectId.isValid;
const path = require("path");

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
      return res.status(404).json({
        success: false,
        message: "Product is not found with given Id",
      });
    }
    const product = await Product.findOne({ id });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product is not found with given id",
      });
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function addProduct(req, res) {
  try {
    // const path = req.file.path.replace(/^public\\/, "");

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      images: req.files.map(
        (file) =>
          `http:\\\\${req.hostname}:3000\\${file.path.replace(/^public\\/, "")}`
      ),
      category: req.body.category,
      rating: req.body.rating,
      reviews: req.body.reviews,
    });

    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Error occur, product cannot be added right now",
      });
    }

    res
      .status(201)
      .json({ success: true, message: "Product is added into database" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function deleteProduct() {
  if (req.params.id == null) {
    res
      .status(400)
      .json({ status: false, message: "Id of product is not provided" });
  }

  const id = req.params.id;

  if (!isValid(id)) {
    res.status(400).json({
      status: false,
      message: "Id is different check before sending it.",
    });
  }

  const product = await Product.findOneAndDelete({ id });

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Error occur, product cannot be added right now",
    });
  }

  res
    .status(200)
    .json({ status: true, message: "Product is deleted successfully" });
}

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
};
