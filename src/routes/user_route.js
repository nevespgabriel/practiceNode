import e from "express";
import { signup, login } from "../controllers/user_controller.js";
import auth from "../middlewares/jwtAuthenticator.js"

const router = e.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;