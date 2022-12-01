const express = require("express");

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  res.json("From Student Router Get");
});

studentRouter.post("/", (req, res) => {
  res.json("From Student Router Post");
});

module.exports = studentRouter;
