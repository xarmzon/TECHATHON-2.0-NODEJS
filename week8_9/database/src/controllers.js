const BookModel = require("./models");

exports.getAllBooks = async (req, res, next) => {
  const books = await BookModel.find({}).sort({ createdAt: -1 });
  res.json({
    msg: "Books Fetched Successfully",
    books,
  });
};
exports.getBookById = async (req, res, next) => {
  console.log(req.params);
  const book = await BookModel.findById(req.params.id);
  res.json({
    msg: "Book Fetched successfully",
    book,
  });
};
exports.getBookByTitle = async (req, res, next) => {};
exports.createBook = async (req, res, next) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json({
      msg: "Book created successfully",
      book,
    });
  } catch (error) {
    next(error);
  }
};
exports.updateBook = async (req, res, next) => {};
exports.deleteBook = async (req, res, next) => {};
