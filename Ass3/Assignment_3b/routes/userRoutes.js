import express from "express"
import { deleteUser, findAll, loginUser, registerUser, updateUser } from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.post("/register",registerUser);
userRouter.get("/findall",findAll);
userRouter.get("/login",loginUser);
userRouter.put("/update",updateUser);
userRouter.delete("/delete",deleteUser);

export default userRouter;