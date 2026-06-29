import React from "react";
import ReactDOM from "react-dom/client";
import HabitTracker from "./HabitTracker";

/*
  Connects React HabitTracker to the Express app.
  
  bookId is passed via a data attribute on the root div:
  <div id="habit-tracker-root" data-book-id="5">
  
  This avoids putting EJS inside script tags.
*/

const rootElement = document.getElementById("habit-tracker-root");

// Read bookId from the data attribute on the div
const bookId = rootElement ? parseInt(rootElement.dataset.bookId) : null;

if (rootElement && bookId) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<HabitTracker bookId={bookId} />);
}