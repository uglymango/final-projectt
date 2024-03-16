const express = require("express");
const { authenticate } = require("../Auth/verifyToken.js");
const  getCheckoutSession  = require("../Controllers/bookingController.js");

const router = express.Router();

router.post("/checkout-session/:doctorId", authenticate, getCheckoutSession);

module.exports = router;
