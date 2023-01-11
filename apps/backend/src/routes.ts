import { Router } from "express";
import UsersRouter from "../users/usersRoutes";

// import AuthRouter from "./auth/authRoutes";

const MainRouter = Router();

MainRouter.use("/users", UsersRouter);
// MainRouter.use("/auth", AuthRouter);

export default MainRouter;
