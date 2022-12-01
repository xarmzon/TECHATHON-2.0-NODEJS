// const user= {
//     name: "request",
//     to: "server"
// }

// user.new = "sdfdsfsd"

// //todo: authentication -> login/register
// //todo: authorization -> access > admin/normal

// mid1 > mid2 > md3

const express = require("express");
const staffRouter = require("./staff");
const studentRouter = require("./students");
const morgan = require("morgan");

const app = express();

app.use(middleware1, middleware2); ///any routing
app.use(morgan("dev"));

app.use("/staff", staffRouter);
app.use("/students", studentRouter);

//todo: routing

// req-> object
// res -> object
// next -> function
function middleware1(req, res, next) {
  //   res.json("From Middleware1");
  console.log("From m1");
  next();
}
function middleware2(req, res, next) {
  //res.json("From Middleware2");
  console.log("From m2");
  next();
}

function handler(req, res) {
  res.json("From Handler");
}

// app.use("/accounts/summary", middleware1, middleware2);
app.get("/accounts/summary", handler);
app.post("/accounts/summary", (req, res) => {
  res.json("From Post Summary");
});

app.listen(8000, () => {
  console.log("Server listening....");
});

//todo: error middleware always receive 4 parameters

//error -> Error
//req -> object
//res -> object
//next -> function
function errorMiddleware(error, req, res, next) {
  console.log(error);
  res.json("Sorry, Something went wrong");
}
app.use("*", errorMiddleware);

//students
//admin
//staff
