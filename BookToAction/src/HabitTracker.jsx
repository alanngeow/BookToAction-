
// 1. Receive the action plan text as a prop
// 2. Parse it into individual daily habits
// 3. Display each habit as a checkbox
// 4. Track which habits are checked
// 5. Show overall progress

import { useState } from "react";
import "./HabitTracker.css";

// HabitTracker component
// Props: actionPlan (string) — the AI generated action plan
const HabitTracker = ({ actionPlan }) => {

  // Parse action plan text into an array of individual habits
  const habits = actionPlan
    .split("\n")  //cut the text at every new line
    .filter(line => line.trim() !== "");  //remove blank lines

  // Track which habits are completed
  // useState takes initial value — an object where each habit index is false
  const [completed, setCompleted] = useState(
    habits.reduce((acc, _, index) => {
      acc[index] = false;
      return acc;
    }, {})
  );

  // Toggle a habit's completed state
  const toggleHabit = (index) => {
    setCompleted(prev => ({
      ...prev,   //keep everything else the same
      [index]: !prev[index]     //flip just this one: false->true or true->false
    }));
  };

  // Calculate progress
  const completedCount = Object.values(completed).filter(Boolean).length;  //[false,true,false] ; [true] - keeps only true values ; 1 - how many are done
  const totalCount = habits.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
     <div className="habit-tracker">

    <h2>30-Day Habit Tracker</h2>
   
      {/* Progress bar */} 
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p>{completedCount} of {totalCount} habits completed ({percentage}%)</p>
      </div>

      {/* Habit list */}
      <ul className="habit-list">
        {habits.map((habit, index) => (
          <li key={index} className={completed[index] ? "completed" : ""}>
            <input
              type="checkbox"
              checked={completed[index]}
              onChange={() => toggleHabit(index)}
            />
            <span>{habit}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default HabitTracker;