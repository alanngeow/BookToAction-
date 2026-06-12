//Import the database from connection pool
import pool from "../config/db.js";

// Get all books
const getAllBooks = async () => {
  const result = await pool.query("SELECT * FROM books");
  return result.rows;
};

// Get one book by id
const getBookById = async (id) => {
  const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  return result.rows[0];
};

// Create a new book
const createBook = async (title, author, notes) => {
  const result = await pool.query(
    "INSERT INTO books (title, author, notes) VALUES ($1, $2, $3) RETURNING *",
    [title, author, notes]
  );
  return result.rows[0];
};

// Update a book's AI generated content
// Called after aiService returns insights
const saveInsights = async (id, summary, actionPlan) => {
  const result = await pool.query(
    "UPDATE books SET ai_summary = $1, action_plan = $2 WHERE id = $3 RETURNING *",
    [summary, actionPlan, id]
  );
  return result.rows[0];
};

export { getAllBooks, getBookById, createBook, saveInsights};