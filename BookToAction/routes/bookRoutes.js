import express from "express";

const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.render("pages/dashboard");
});

router.get("/add-book", (req, res) => {
  res.render("pages/addBook");
});

router.get("/books/:id", (req, res) => {
  res.render("pages/bookDetail");
});


export default router;