import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import universityRouter from "./routers/api/university.mjs";
import academicYearRouter from "./routers/api/academicYear.mjs";
import departmentRouter from "./routers/api/department.mjs";

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 3000;
mongoose.connect(process.env.MONGODB_URI);

// Middleware
app.use(express.json());
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}
app.use(cookieParser());

// Routers
app.use("/api/universities", universityRouter);
app.use("/api/academicYears", academicYearRouter);
app.use("/api/departments", departmentRouter);

// Running the server
app.listen(PORT, () => {
  console.log("Server is Up!");
});
