const Booking = require("../models/BookingSchema");
const Doctor = require("../models/DoctorSchema");

const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).populate('reviews').select("-password");

    res.status(200).json({
      success: true,
      message: "Doctor found",
      data: doctor,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "No Doctor Found" });
  }
};

const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
       doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

const getDoctorProfile = async(req,res) =>{
  const userId = req.userId

  try {
    const doctor = await Doctor.findById(userId)
    if(!doctor){
      return res.status(404).json({success:false, message:"Doctor not found" })
    }
    const {password, ... rest} = doctor._doc;
    const appointments = await Booking.find({doctor:userId})
    res.status(200).json({success:true, message:"profile info is getting", data:{ ... rest, appointments}})
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong, cannot get" });
  }
}

module.exports = { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctor, getDoctorProfile };
