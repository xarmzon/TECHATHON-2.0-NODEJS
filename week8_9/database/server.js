const app = require("./src/app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
