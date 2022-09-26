import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";
import { readdirSync } from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);


const app = express();
const PORT = 8000;

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

app.get("/", (req, res) => {
  res.send("Welcome home");
});

app.get("/books", (req, res) => {
  res.send("Welcome to books");
});

readdirSync("./routes").map(async (r) => app.use("/", await import("./routes/" + r)));

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
