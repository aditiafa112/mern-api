exports.createProduct = (req, res, next) => {
  res.json({
    message: "Create Product Succes",
    data: {
      id: 1,
      nama: "Sari Roti",
      price: 8000,
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
