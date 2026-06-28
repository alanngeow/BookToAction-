import { useState, useEffect } from "react";
import "./HabitTracker.css";

/*
  HabitTracker component
  Props:
  - bookId: the book's database id — used to fetch and toggle habits via API
*/
const HabitTracker = ({ bookId }) => {

  // habits now comes from the database, not parsed text
  // starts as empty array, filled when API responds
  const [habits, setHabits] = useState([]);

  /*
    useEffect runs after the component mounts
    This is where we fetch habits from the database
    The empty [] means it only runs once — when the page loads
  */
  useEffect(() => {
    fetch(`/api/books/${bookId}/habits`)
      .then(res => res.json())
      .then(data => setHabits(data))
      .catch(err => console.error("Failed to fetch habits:", err));
  }, []);

  /*
    Toggle a habit — calls the API then updates local state
    We update local state immediately so UI feels instant
    The API call saves it to the database permanently
  */
  const toggleHabit = async (habitId) => {

    // Call the toggle API
    await fetch(`/api/books/${bookId}/habits/${habitId}/toggle`, {
      method: "POST"
    });

    // Update local state to reflect the change instantly
    setHabits(prev =>
      prev.map(habit =>
        habit.id === habitId
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  // Calculate progress
  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Show loading state while habits are being fetched
  if (habits.length === 0) {
    return <p>Loading habits...</p>;
  }

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

      {/* Habit list — now uses database id instead of array index */}
      <ul className="habit-list">
        {habits.map(habit => (
          <li key={habit.id} className={habit.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleHabit(habit.id)}
            />
            <span>{habit.habit_text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;