const express = require("express");
const {
  getAllReviews,
  createReview,
} = require("../Controllers/reviewControllers.js");
const { authenticate, restrict } = require("../Auth/verifyToken.js");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["patient"]), createReview);

module.exports = router;
