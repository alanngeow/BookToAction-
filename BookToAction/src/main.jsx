import React from "react";
import ReactDOM from "react-dom/client";
import HabitTracker from "./HabitTracker";

// Mount the component into a div with id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HabitTracker actionPlan={`Day 1: Wake up at 6am
Day 2: Read for 30 minutes
Day 3: Exercise for 20 minutes
Day 4: Write in journal
Day 5: Meditate for 10 minutes`} />
);