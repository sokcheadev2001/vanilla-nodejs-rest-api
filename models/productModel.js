const products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils/file.util");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findOne(id) {
  return new Promise((resolve, reject) => {
    const product = products.find(({ id }) => id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

module.exports = {
  findAll,
  findOne,
  create,
};
