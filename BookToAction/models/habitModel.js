import pool from "../config/db.js";

// Get all habits for a specific book
const getHabitsByBookId = async (bookId) => {
  const result = await pool.query(
    "SELECT * FROM habits WHERE book_id = $1 ORDER BY day_number",
    [bookId]
  );
  return result.rows;
};

// Save an array of habits for a book
// Called when action plan is first generated
const saveHabits = async (bookId, habits) => {
  // habits is an array of strings
  // We need to insert one row per habit
  for (let i = 0; i < habits.length; i++) {
    await pool.query(
      "INSERT INTO habits (book_id, day_number, habit_text) VALUES ($1, $2, $3)",
      [bookId, i + 1, habits[i]]
    );
  }
};

// Toggle a habit's completed status
const toggleHabit = async (habitId) => {
  const result = await pool.query(
    "UPDATE habits SET completed = NOT completed WHERE id = $1 RETURNING *",
    [habitId]
  );
  return result.rows[0];
};

export { getHabitsByBookId, saveHabits, toggleHabit };