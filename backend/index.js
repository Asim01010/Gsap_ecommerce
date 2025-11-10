import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import product from "./routes/product.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", product);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`.rainbow);
});
