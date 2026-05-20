// The path ../ means "go up one folder level" — because bookRoutes.js is inside routes/, so you need to go up to the project root before going into controllers/.
//{ getDashboard, getAddBook, getBookById } is found in /controllers/bookController.js

// Express is required to use express.Router()
import express from "express";

import { getDashboard, getAddBook, getBookById } from "../controllers/bookController.js";


const router = express.Router();

router.get("/dashboard", getDashboard);

router.get("/add-book", getAddBook);

router.get("/books/:id", getBookById);

export default router;