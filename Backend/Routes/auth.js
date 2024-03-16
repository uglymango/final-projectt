const express = require("express");
const authController = require("../Controllers/authController.js");

const Signup = authController.Signup;
const Login = authController.Login;

const router = express.Router();

router.post("/Signup", Signup);
router.post("/Login", Login);

module.exports = router;
