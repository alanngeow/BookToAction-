import React from "react";
import ReactDOM from "react-dom/client";
import HabitTracker from "./HabitTracker";

/*
  This file connects the React component to the Express app.

  Instead of hardcoded test data, we now read the real action plan
  that Express passes via window.__ACTION_PLAN__ in bookDetail.ejs.

  Flow:
  1. Express renders bookDetail.ejs
  2. EJS writes the action plan into window.__ACTION_PLAN__
  3. This file reads it and passes it to HabitTracker as a prop
*/

// Read bookId passed from Express via bookDetail.ejs
const bookId = window.__BOOK_ID__;

const rootElement = document.getElementById("habit-tracker-root");

if (rootElement && bookId) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<HabitTracker bookId={bookId} />);
}