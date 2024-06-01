import { Router } from "express";
import { login, logout, register,verifyUser } from "../controllers/user.controller.js";
import { authenticateJWT } from "../helper/verifyJwt.js";




const userRouter=Router()

userRouter.route("/signup").post(register)
userRouter.route("/verify").post(verifyUser)
userRouter.route("/login").post(login)
userRouter.route("/logout").get(authenticateJWT,logout)
export default userRouter