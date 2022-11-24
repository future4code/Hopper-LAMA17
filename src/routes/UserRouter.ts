import express from "express";
import { UserController } from "../controller/UserController";

export const UserRouter = express.Router()

const userController = new UserController()

UserRouter.post("/create", userController.create)
UserRouter.get("/select", userController.select)