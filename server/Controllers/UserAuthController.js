import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Citizen } from "../Models/CitizenModel.js";
export const postsignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const check = await Citizen.findOne({ email });
    if (check) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Citizen({ name, email, password: hashedPassword });
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "Your account created successfully" });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Network Error Please try again later",
    });
  }
};

export const postlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const check = await Citizen.findOne({ email });
    if (!check) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    if (!(await bcrypt.compare(password, check.password))) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong password" });
    }
    check.lastLoginAt = new Date();
    await check.save();
    const payload = {
      _id: check._id,
      name: check.name,
      email: check.email,
      role: "citizen",
      ...(check.phoneNumber && { phoneNumber: check.phoneNumber }),
      ...(check.address && { address: check.address }),
      ...(check.dateOfBirth && { dateOfBirth: check.dateOfBirth }),
      ...(check.govtIds &&
        check.govtIds.length > 0 && { govtIds: check.govtIds }),
    };
    const token = jwt.sign(payload, "jwt-secret");
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    return res
      .status(202)
      .json({ success: true, message: "You are logged in successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Something went wrong" });
  }
};

export const postlogout = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (token) {
      const decoded = jwt.verify(token, "jwt-secret");
      if (decoded && decoded.email) {
        const user = await Citizen.findOne({ email: decoded.email });
        if (user) {
          user.lastLogoutAt = new Date();
          await user.save();
        }
      }
    }
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Logout failed" });
  }
};
