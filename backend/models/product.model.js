const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: [String],

  featured: Boolean,

  trending: Boolean,

  rating: String,

  reviews: String,

  stock: String,

  colors: {
    type: [String],
    required: true,
  },

  company: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
