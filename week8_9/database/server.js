const app = require("./src/app");
const { connect } = require("mongoose");

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    //anything that can cause error will be here
    // // todo: connect("mongodb://HOST:PORT/DatabaseName")
    await connect("mongodb://localhost:27017/BooksDB");
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server Running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("Database Connection Failed");
  }
};

start();

//connection
//create model from the schema
//perform actions: create, update, read, delete (CRUD)
