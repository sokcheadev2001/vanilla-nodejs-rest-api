const Product = require("../models/productModel");
const { getPostData } = require("../utils/util");
//  @desc   Gets all products
// @route   GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @desc    Gets single products
// @route   GET /api/product/id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findOne(id);

    if (!product) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product not found" }));
    } else {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc    Create products
// @route   Create /api/product
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);
    const { title, description } = JSON.parse(body);
    const product = {
      title,
      description,
    };
    const newProduct = await Product.create(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
