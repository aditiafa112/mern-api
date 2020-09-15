const express = require("express");

const app = express();
const productRouter = require("./src/routes/products");

app.use("/", productRouter);

app.listen(4000);
