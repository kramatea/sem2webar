// const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const http = require("http");
const router = require("./routes/index");

// dotenv.load();
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
  console.log(`Listening`);
});
