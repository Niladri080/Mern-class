import { Router } from "express";
import { getAdmin } from "../Controllers/AdminHome.js";
const router=Router();
router.get('/home',getAdmin);
export default router;