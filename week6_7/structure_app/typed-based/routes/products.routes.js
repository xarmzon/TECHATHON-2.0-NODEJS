const express = require("express");
const {
  deleteProduct,
  getSingleProduct,
  updateSingleProduct,
  getAllProducts,
} = require("../controllers/products.controllers");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:id", getSingleProduct);
productsRouter.put("/:id", updateSingleProduct);
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
