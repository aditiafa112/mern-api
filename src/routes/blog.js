const express = require("express");

const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");

// [POST] : /v1/blog/post
router.post(
  "/post",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("title minimal harus 5 huruf."),
    body("body")
      .isLength({ min: 5 })
      .withMessage("body minimal harus 5 huruf."),
  ],
  blogController.createBlogPost
);

module.exports = router;
