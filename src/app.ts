import express, { Request, Response, NextFunction } from "express";
import globleErrorHandler from "./middlewares/globleErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

//Routes
//Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to home route" });
});

app.use("/api/users", userRouter);

// Globle error handler
app.use(globleErrorHandler);

export default app;
