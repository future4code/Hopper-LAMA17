import express from "express";
import { ShowController } from "../controller/ShowController";

export const ShowRouter = express.Router()

const showController = new ShowController()

ShowRouter.post("/create", showController.create)
// ShowRouter.get("/day", showController.daySchedule)
ShowRouter.get("/select", showController.select)