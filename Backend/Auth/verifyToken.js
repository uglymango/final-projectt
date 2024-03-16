const jwt = require("jsonwebtoken");
const Doctor = require("../models/DoctorSchema.js");
const User = require("../models/UserSchema.js");

const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }
    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  try {
    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    let user = null;

    if (patient) {
      user = patient;
    } else if (doctor) {
      user = doctor;
    }

    if (!user || !roles.includes(user.role)) {
      return res
        .status(401)
        .json({ success: false, message: "You are not authorized" });
    }

    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { restrict, authenticate };