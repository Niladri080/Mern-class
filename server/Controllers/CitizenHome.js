import { Citizen } from "../Models/CitizenModel.js";

export const getCitizen = (req, res) => {
  try {
    res
      .status(200)
      .json({
        success: true,
        message: "Citizen Home Accessed Successfully",
        user: req.user,
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
export const getCitizenProfile = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const citizen = await Citizen.findById(userId).select("-password");
    if (!citizen) {
      return res
        .status(404)
        .json({ success: false, message: "Citizen not found" });
    }
    res.status(200).json({ success: true, citizen });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
