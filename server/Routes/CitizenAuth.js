import { Router } from "express"
import { postlogin, postsignup, postlogout} from "../Controllers/USerAuthController.js";
const router=Router();
router.post('/signup',postsignup);
router.post('/login',postlogin);
router.post('/logout',postlogout);
export default router;
