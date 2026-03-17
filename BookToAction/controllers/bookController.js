

// Renders the home page
const getHome = (req, res) => {
  res.render("pages/home");
};

// Renders the dashboard page
const getDashboard = (req, res) => {
  res.render("pages/dashboard");
};

// Renders the add book page
const getAddBook = (req, res) => {
  res.render("pages/addBook");
};

// Renders the book detail page
const getBookById = (req, res) => {
  res.render("pages/bookDetail");
};

export { getHome, getDashboard, getAddBook, getBookById };