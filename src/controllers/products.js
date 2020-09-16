exports.createProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  res.json({
    message: "Create Product Succes !!!",
    data: {
      id: 1,
      nama: name,
      price: price,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: "Get All Products Succes",
    data: {
      id: 1,
      nama: "Sari Roti",
      price: 8000,
    },
  });
  next();
};
