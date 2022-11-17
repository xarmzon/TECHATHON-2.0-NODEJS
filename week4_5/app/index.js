const express = require("express");

const app = express();

const PORT = 8000;

// app.use()

// app.METHODS()
//METHODS:-> get, post, put, patch, delete

//routing a get request
// app.get(path, callback1,callback2,callback3)
app.get("/users", (req, res) => {
  res.status(200).json({
    msg: "Welcome to Our First Express API",
    success: true,
  });
});
app.post("/users", (req, res) => {
  res.status(201).json({
    msg: "Account Created Successfully",
    success: true,
    error: null,
  });
});
// app.get("/dashboard")
// app.get("/payments")

app.listen(PORT, () => {
  console.log("Server is Running....");
});
