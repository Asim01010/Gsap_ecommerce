import express from "express";
import {
  deleteProd,
  getProducts,
  postProd,
  updateProd,
} from "../controllers/prodController.js";
const product = express.Router();

product.get("/products", getProducts);

product.post("/create-product", postProd);
product.put("/update-product/:id", updateProd);

product.delete("/delete-product/:id", deleteProd);

export default product;
