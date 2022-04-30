import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import keys from "./config/keys_dev.js";

import userRouter from "./routes/user.js";
import profileRouter from "./routes/profile.js";
import propertyRouter from "./routes/property.js";

const CONNECTION_URL = keys.mongoURI;
const PORT = 5000;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/property", propertyRouter);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//Handle Promise Rejection
process.on("unhandledRejection", (error) => {
  throw error;
});

process.on("uncaughtException", function (err) {
  console.error(new Date().toUTCString() + " uncaughtException:", err.message);
  console.error(err.stack);
  // Send the error log to your email
  // sendMail(err);
  process.exit(1);
});
