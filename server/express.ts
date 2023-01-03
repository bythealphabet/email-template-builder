import path from "path";
import express from "express";
import template from "./template";
import devBundle from "../build-utils/devBundle";
import email from "../emails";

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

const development = process.env.NODE_ENV === "development";
if (development) {
  console.log("development mode devBundle active:");
  devBundle.compile(app);
}

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
app.use("/email", (req, res) => {
  res.status(200).json({ htmlEmail: email().toString() });
});

app.get("*", (req, res) => {
  if (req.url === "/__webpack_hmr") return;
  res.status(200).send(template());
});

export default app;
