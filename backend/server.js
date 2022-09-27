import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import dotenv from 'dotenv';
import mongoose from 'mongoose'
dotenv.config()

const app = express();
const PORT = process.env.PORT;

// cors
const options = (req, res) => {
  let tmp;
  let origin = req.header("origin");
  let allowed = ["http://localhost:3000", "http://localhost:4000"];
  if (allowed.indexOf(origin) > -1) {
    tmp = {
      origin: true,
      optionSuccessStatus: 200,
    };
  } else {
    tmp = {
      origin: "Not allow",
    };
  }
  res(null, tmp);
};

app.use(cors(options));

// routes
readdirSync("./routes").map((r) => {
  const route = async () => {
    let {router} = await import("./routes/" + r);
    return app.use("/", router);
  };
  route()
});

// database

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
