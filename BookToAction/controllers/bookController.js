// Import model functions
import {getAllBooks, getBookById, createBook} from "../models/bookModel.js";

// Renders home page
const getHome = (req, res) => {
  res.render("pages/home");
};

// Gets all books and passes to dashboard view
const getDashboard = async (req, res) => {
  const books = await getAllBooks();
  res.render("pages/dashboard", { books: books });
};

// Gets one book by id and passes to detail view
const getBookDetail = async (req, res) => {
  const id = req.params.id; // hint: how do you get the id from the URL?
  const book = await getBookById(id);
  res.render("pages/bookDetail", {book: book });
};

// Renders the add book form
const getAddBook = (req, res) => {
  res.render("pages/addBook");
};

// Handles form submission - creates a new book
const postCreateBook = async (req, res) => {
  const { title, author, notes } = req.body; // hint: where does form data live?
  await createBook(title, author, notes);
  res.redirect("/dashboard"); // hint: where should the user go after adding a book?
};

export { getHome, getDashboard, getBookDetail, getAddBook, postCreateBook };