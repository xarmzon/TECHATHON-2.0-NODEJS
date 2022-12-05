const express = require("express");
const { errorMiddleware, notFoundMiddleware } = require("./middleware");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  axios;
  res.json({
    msg: "🎉✨Welcome to Database Class API✨🎉",
  });
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
