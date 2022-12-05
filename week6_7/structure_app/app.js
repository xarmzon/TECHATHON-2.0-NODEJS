const express = require("express");
//auth
//product
//admin

const app = express();

//todo: register all routes
app.use("/admin", adminRouter);
app.use("/auth", authRouter);
// app.methods-> get, post

// Model->Routes->Controller

// /auth
// /products

//todo: type-based
//model folder

//todo: feature-based
