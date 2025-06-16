import express from "express";
import userRoutes from "./modules/user/userRoutes";
import logger from "./common/middleware/logger";
import roleRoutes from "./modules/role/roleRoutes";
import departmentRoutes from "./modules/department/departmentRoutes";

const app = express();
const port = 10001;

app.use(express.json());
app.use(logger); // custom middleware
app.use("/users", userRoutes); // router
app.use("/api", roleRoutes); // router
app.use("/api",departmentRoutes); // router

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
