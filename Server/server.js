const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const userRouter = require("./Routes/UserRouter");
const option = {
  origin : "http://localhost:3000",
  userSuccessStatus:200
}

app.use(cors(option));
app.use(express.json());

// routes
app.use('/', userRouter)


mongoose
  .connect(process.env.DATABASE_URL, {
    UseNewUrlParser: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
app.listen(8000, () => {
  console.log("port running");
});
