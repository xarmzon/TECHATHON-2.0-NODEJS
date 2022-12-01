const express = require("express");

const staffRouter = express.Router();

function middleware(req, res, next) {
  //res.json("From Middleware2");
  console.log("From Staff Middle");
  next();
}

staffRouter.use(middleware);
staffRouter.get("/", (req, res) => {
  res.json("From Staff Router Get");
});
staffRouter.post("/", (re, res) => {
  res.json("From Staff Router Post");
});

module.exports = staffRouter;
