// Book routes — maps URLs to controller functions
// GET  /dashboard   → getDashboard
// GET  /add-book    → getAddBook
// POST /add-book    → postCreateBook
// GET  /books/:id   → getBookDetail

// Express is required to use express.Router()
import express from "express";

import { getDashboard, getBookDetail, getAddBook, postCreateBook } from "../controllers/bookController.js";


const router = express.Router();

router.get("/dashboard", getDashboard);

router.get("/add-book", getAddBook);

router.post("/add-book", postCreateBook);        // POST route for form submission

router.get("/books/:id", getBookDetail);

export default router;