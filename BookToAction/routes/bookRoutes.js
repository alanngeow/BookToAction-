// Book routes — maps URLs to controller functions
// GET  /dashboard   → getDashboard
// GET  /add-book    → getAddBook
// POST /add-book    → postCreateBook
// GET  /books/:id   → getBookDetail

// Express is required to use express.Router()
import express from "express";

import { getDashboard, getBookDetail, getAddBook, postCreateBook, generateBookInsights, deleteBookController, toggleHabitController, getHabits } from "../controllers/bookController.js";


const router = express.Router();

router.get("/dashboard", getDashboard);

router.get("/add-book", getAddBook);

router.post("/add-book", postCreateBook);        // POST route for form submission

router.get("/books/:id", getBookDetail);

router.post("/books/:id/generate", generateBookInsights);

router.post("/books/:id/delete", deleteBookController);

router.get("/api/books/:id/habits", getHabits);

router.post("/api/books/:id/habits/:habitId/toggle", toggleHabitController)

export default router;