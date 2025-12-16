import { Router } from "express";
import { getCitizen, getCitizenProfile } from "../Controllers/CitizenHome.js";
const router=Router();
router.get('/home',getCitizen);
router.get('/profile',getCitizenProfile);
export default router;