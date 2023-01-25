import express from "express";
const app = express();
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

//importing middlewares
import notFoundMiddlware from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

//routes
import authRouter from "./Routes/authRoutes.js";

//inbuile middleware
app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddlware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
