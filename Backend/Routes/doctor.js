const express = require("express");
const doctorControllers = require("../Controllers/doctorController.js");
const { authenticate, restrict } = require("../Auth/verifyToken.js");
const reviewRouter = require("../Routes/review.js");

const { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } =
  doctorControllers;

const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

module.exports = router;
