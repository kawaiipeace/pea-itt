import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

//Route
import userRoutes from "./modules/user/userRoutes";
import logger from "./common/middleware/logger";
import roleRoutes from "./modules/role/roleRoutes";
import departmentRoutes from "./modules/department/deptRoutes";
import authRoutes from "./modules/auth/authRoutes";

const app = express();
const port = 10001;

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API with Swagger",
    version: "1.0.0",
    description: "A simple Express API documented with Swagger",
  },
  servers: [
    {
      url: `http://localhost:${port}/api`,
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions in JSDoc comments
  apis: ["./src/modules/**/*.ts"], // adjust this path to point to where your route files are
};

const swaggerSpec = swaggerJSDoc(options);

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(logger); // custom middleware

// Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//router
app.use("/api", userRoutes);
app.use("/api", roleRoutes);
app.use("/api", authRoutes);
app.use("/api", departmentRoutes);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
