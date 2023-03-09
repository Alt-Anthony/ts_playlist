import { Router } from "express";
import * as Controller from "./controller";

const userRouter = Router();

userRouter.post("/", Controller.store);

export default userRouter;