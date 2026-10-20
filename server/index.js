import cloudinary from "./src/config/cloudinary.config.js";
import express from "express";
import connectDB from "./src/config/dbConnection.config.js";
import AuthRouter from "./src/router/auth.route.js";
import PublicRouter from "./src/router/public.route.js";
import UserRouter from "./src/router/user.route.js";
import CommonRouter from "./src/router/common.route.js";
import RestaurantRouter from "./src/router/restaurant.route.js";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);
app.use("/user", UserRouter);
app.use("/common", CommonRouter);
app.use("/restaurant", RestaurantRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Cravings Project" });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message || "Internal Server Error", data: null });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("Server Started on port:", port);
  connectDB();
  try {
    const result = await cloudinary.api.ping();
    console.log("Cloudinary Connected:", result);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
});
