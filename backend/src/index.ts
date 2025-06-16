import express from "express";
import userRoutes from "./modules/user/userRoutes";
import logger from "./common/middleware/logger";
import roleRoutes from "./modules/role/roleRoutes";
import departmentRoutes from "./modules/department/deptRoutes";
import authRoutes from "./modules/auth/authRoutes";

const app = express();
const port = 10001;

app.use(express.json());
app.use(logger); // custom middleware
//router
app.use("/users", userRoutes);
app.use("/api", roleRoutes);
app.use("/api", authRoutes);
app.use("/api",departmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
