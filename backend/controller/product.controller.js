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
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      images: req.files.map((file) =>
        path.normalize(
          `http:\\\\${req.hostname}:3000\\${file.path.replace(/^public\\/, "")}`
        )
      ),
      category: req.body.category,
      rating: req.body.rating,
      reviews: req.body.reviews,
      featured: req.body.featured,
      trending: req.body.trending,
      company: req.body.company,
      stock: req.body.stock,
      colors: req.body.colors.split(" "),
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
  try {
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
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function getFeaturedProducts(req, res) {
  try {
    const featuredProducts = await Product.find({ featured: true });

    if (!featuredProducts) {
      return res.status(404).json({
        success: false,
        message: "There is not single featued products",
      });
    }

    res.status(200).json({ success: true, data: featuredProducts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function getTrendingProducts(req, res) {
  try {
    const trendingProducts = await Product.find({ trending: true });

    if (!trendingProducts) {
      return res.status(404).json({
        success: false,
        message: "There is not single trending products",
      });
    }

    res.status(200).json({ success: true, data: trendingProducts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  getFeaturedProducts,
  getTrendingProducts,
};
