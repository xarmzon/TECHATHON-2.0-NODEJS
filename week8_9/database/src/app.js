const express = require("express");
const { errorMiddleware, notFoundMiddleware } = require("./middleware");
const BooksRouter = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    msg: "🎉✨Welcome to Database Class API✨🎉",
  });
});

app.use("/books", BooksRouter);
// app.use("/auth", AuthRouter)

//AuthRouter.post("/login")  /auth/login

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
