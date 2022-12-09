const { Schema, model } = require("mongoose");

//1. Create Schema
// const NoteSchema = new Schema(shape,options)
// const NoteSchema = new Schema({},{})
const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      // required: [true, "The title of the book  is required"]
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//String  [] Array, Object, Map, Number, Date

//2. Compile a model from Schema
// const Model = model(collectionName,schema)
const BookModel = model("Books", BookSchema);

module.exports = BookModel;

//collection
// schema
//model

//database
//collections
// documents

//Notes
//Users
//Payments
