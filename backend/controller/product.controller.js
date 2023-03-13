const Product = require("../models/product.model");
const isValid = require("mongoose").Types.ObjectId.isValid;
const path = require("path");

async function getAllProducts(req, res, next) {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No products found" });
    }

    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getProduct(req, res) {
  try {
    const id = req.params.id;
    if (!isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function addProduct(req, res) {
  try {
    const images =
      req.files?.map((file) => ({
        url: `http://${req.hostname}:3000/${file.path.replace(/^public/, "")}`,
        name: file.originalname,
      })) || [];

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      images: images,
      category: req.body.category,
      rating: req.body.rating,
      reviews: req.body.reviews,
      featured: req.body.featured,
      trending: req.body.trending,
      company: req.body.company,
      stock: req.body.stock,
      colors: req.body.colors?.split(",") || [],
    });

    res.status(201).json({
      success: true,
      message: "Product added to database",
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function editProduct(req, res) {
  try {
    const id = req.params.id;

    if (!isValid(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }

    if (!req.body) {
      return res.json(400).json({
        success: false,
        message: "Bad request, request body is missing",
      });
    }

    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function deleteProduct(req, res) {
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
        message: "Invalid product ID",
      });
    }

    const product = await Product.findOneAndDelete({ _id: id });

    if (!product) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
      });
    }

    res
      .status(200)
      .json({ status: true, message: "Product is deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getFeaturedProducts(req, res) {
  try {
    const featuredProducts = await Product.find({ featured: true });

    if (featuredProducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No featured products found",
      });
    }

    res.status(200).json({ success: true, data: featuredProducts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getTrendingProducts(req, res) {
  try {
    const trendingProducts = await Product.find({ trending: true });

    if (trendingProducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No trending products found",
      });
    }

    res.status(200).json({ success: true, data: trendingProducts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getProductCategories(req, res) {
  try {
    const categories = await Product.distinct("category");

    if (!categories || categories.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No category is found" });
    }

    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getProductsInCategory(req, res) {
  try {
    const category = req.params.category;

    if (!category) {
      return res
        .status(400)
        .json({ success: false, message: "Category parameter not provided" });
    }

    const categoryProducts = await Product.find({ category });

    if (!categoryProducts || categoryProducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No products found for category '${category}'`,
      });
    }

    res.status(200).json({ success: true, data: categoryProducts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getProductCompanies(req, res) {
  try {
    const companies = await Product.distinct("company");

    if (!companies || companies.length === 0) {
      res.status(400).json({ success: false, message: "No companies found" });
    }

    res.status(200).json(companies);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getProductsInCompany(req, res) {
  try {
    const company = req.params.company;

    if (!company) {
      return res
        .status(400)
        .json({ success: false, message: "Company name not provided" });
    }

    const companyProducts = await Product.find({ company });

    if (!companyProducts || companyProducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No products found for company '${company}'`,
      });
    }

    res.status(200).json(companyProducts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getProductColors(req, res) {
  console.log("lll");
  try {
    const colors = await Product.distinct("colors");

    if (!colors || colors === 0) {
      res.status(400).json({ success: false, message: "Cannot get colors" });
    }

    res.status(200).json(colors);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

async function getProductsInColors(req, res) {
  console.log("sds");
  try {
    const color = req.params.color;

    if (!color) {
      return res
        .status(400)
        .json({ success: false, message: "color is not provided" });
    }

    const colorsProducts = await Product.find({ colors: { $in: [color] } });

    if (!colorsProducts || colorsProducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No products found for color '${color}'`,
      });
    }

    res.status(200).json(colorsProducts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  getFeaturedProducts,
  getTrendingProducts,
  getProductCategories,
  getProductsInCategory,
  getProductCompanies,
  getProductsInCompany,
  getProductColors,
  getProductsInColors,
  editProduct,
};
