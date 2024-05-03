import express, { Request, Response, NextFunction } from "express";
import globleErrorHandler from "./middlewares/globleErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";

const app = express();
app.use(express.json());

//Routes
//Http methods: GET, POST, PUT, PATCH, DELETE
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to home route" });
});

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

// Globle error handler
app.use(globleErrorHandler);

export default app;
