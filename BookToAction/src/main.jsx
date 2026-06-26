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

// Read the action plan passed from Express via bookDetail.ejs
const actionPlan = window.__ACTION_PLAN__ 
  ? decodeURIComponent(window.__ACTION_PLAN__) 
  : "";

// Find the div where React should mount
const rootElement = document.getElementById("habit-tracker-root");

// Only mount if both the div and action plan exist
// This prevents errors on pages without the habit tracker
if (rootElement && actionPlan) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<HabitTracker actionPlan={actionPlan} />);
}