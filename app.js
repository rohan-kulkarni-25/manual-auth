const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

const user = require("./routes/user");
const dashboard = require("./routes/dashboard");

app.use("/api/v1", user);
app.use("/dashboard", dashboard);

module.exports = app;
