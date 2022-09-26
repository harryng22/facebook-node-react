import express from "express";
import cors from "cors";
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

readdirSync("./routes").map((r) => {
  const route = async () => {
    let {router} = await import("./routes/" + r);
    return app.use("/", router);
  };
  route()
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
