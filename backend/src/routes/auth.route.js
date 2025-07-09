import express from "express";
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);  
//eventhoufh the logout route is not used in the frontend, it is still needed to clear the cookie on the server side
// so that the user can log out from other devices
// post method is used for method that do server side changes, like clearing cookies hence we use post here

router.post("/onboarding", protectRoute, onboard);

//CAN ADD
// FORGET PASSWORD
// RESET PASSWORD EMAIL.


// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export default router;