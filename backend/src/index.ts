import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./modules/user/userRoutes";
import logger from "./common/middleware/logger";
import roleRoutes from "./modules/role/roleRoutes";
import departmentRoutes from "./modules/department/deptRoutes";
import authRoutes from "./modules/auth/authRoutes";

const app = express();
const port = 10001;

app.use(
  cors({
    origin: "http://localhost:10000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(logger); // custom middleware

//router
app.use("/api", userRoutes);
app.use("/api", roleRoutes);
app.use("/api", authRoutes);
app.use("/api",departmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
