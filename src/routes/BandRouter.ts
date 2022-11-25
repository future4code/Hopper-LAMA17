import express from "express";
import { BandController } from "../controller/BandController";

export const BandRouter = express.Router()

const bandController = new BandController()

BandRouter.post("/create", bandController.create)
BandRouter.get("/find", bandController.findBand)