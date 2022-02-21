require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/database");
const express = require("express");

const port = process.env.PORT;

connectDB();

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server running on PORT ${port}`);
});
