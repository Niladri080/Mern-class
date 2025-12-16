import { Citizen } from "../Models/CitizenModel.js";

export const getCitizen = (req, res) => {
  try {
    res.status(200).json({
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

// Download full account data as JSON
export const downloadAccountData = async (req, res) => {
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

    const data = {
      citizen,
    };

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="account-data.json"'
    );
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(JSON.stringify(data, null, 2));
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to download account data" });
  }
};

// Clear non-essential account data (documents/metadata could be added here)
export const clearAccountData = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const citizen = await Citizen.findById(userId);
    if (!citizen) {
      return res
        .status(404)
        .json({ success: false, message: "Citizen not found" });
    }

    citizen.govtIds = [];
    citizen.address = undefined;
    citizen.dateOfBirth = undefined;
    await citizen.save();

    return res.status(200).json({
      success: true,
      message: "Account data cleared successfully",
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to clear account data" });
  }
};

// Permanently delete account
export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const citizen = await Citizen.findById(userId);
    if (!citizen) {
      return res
        .status(404)
        .json({ success: false, message: "Citizen not found" });
    }

    await Citizen.deleteOne({ _id: userId });

    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    return res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete account" });
  }
};
