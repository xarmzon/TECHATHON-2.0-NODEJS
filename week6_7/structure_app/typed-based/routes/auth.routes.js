const express = require("express");
const { createAccount, logoutUser } = require("../controllers/auth.controller");
const { checkToken } = require("../middleware/auth.middleware");

const authRouter = express.Router();

authRouter.post("/register", createAccount);
authRouter.post("/logout", checkToken, logoutUser) /
  auth /
  register /
  auth /
  logout;
