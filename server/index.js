import cloudinary from "./src/config/cloudinary.config.js";
import express from "express";
import connectDB from "./src/config/dbConnection.config.js";
import AuthRouter from "./src/router/auth.route.js";
import PublicRouter from "./src/router/public.route.js";
<<<<<<< HEAD
import UserRouter from "./src/router/user.route.js";
=======
import CommonRouter from "./src/router/common.route.js";
import RestaurantRouter from "./src/router/restaurant.route.js";
>>>>>>> origin/main
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

<<<<<<< HEAD
const app = express();

app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"], credentials: true }));
=======

const app = express()
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
>>>>>>> origin/main
app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);
<<<<<<< HEAD
app.use("/user", UserRouter);

//Default API
app.get("/", (req, res) => {
    console.log("Default Get API Hit");
    res.json({ message: "Welcome to my Cravings Project" });
=======
app.use("/common", CommonRouter);
app.use("/restaurant", RestaurantRouter);
//Default API
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my Cravings Project" });
>>>>>>> origin/main
});

//Default Error Handler

app.use((err, req, res, next) => {
<<<<<<< HEAD
    const ErrMessage = err.message || "Internal Server Error";
    const ErrStausCode = err.statusCode || 500;

    res.status(ErrStausCode).json({ message: ErrMessage, data: null });
=======
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStausCode = err.statusCode || 500;

  res.status(ErrStausCode).json({ message: ErrMessage });
>>>>>>> origin/main
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
<<<<<<< HEAD
    console.log("Server Started on port:", port);
    connectDB();
    try {
        const result = await cloudinary.api.ping();
        console.log("Cloudinary Connected :");
        console.log(result);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
=======
  console.log("Server Started on port:", port);
  connectDB();
  try {
    const result = await cloudinary.api.ping();
    console.log("Cloudinary Connected :");
    console.log(result);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
>>>>>>> origin/main
});