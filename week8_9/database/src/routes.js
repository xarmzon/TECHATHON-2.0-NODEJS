const express = require("express");
const {
  getAllBooks,
  getBookById,
  getBookByTitle,
  createBook,
  updateBook,
  deleteBook,
} = require("./controllers");
const { notFoundMiddleware } = require("./middleware");

const BooksRouter = express.Router();

BooksRouter.get("/", getAllBooks); // /books
BooksRouter.get("/id/:id", getBookById); //  /books/id/xxxxxxxx
BooksRouter.get("/title/:title", getBookByTitle); // /books/title/xxxxxx

BooksRouter.post("/", createBook); //   POST > /books

BooksRouter.put("/:id", updateBook); //   PUT > /books/xxxxxxx

BooksRouter.delete("/:id", deleteBook); //  DELETE > /books/xxxxxxx

BooksRouter.use(notFoundMiddleware);

module.exports = BooksRouter;
