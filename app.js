/*
================================================

BookToAction - Main Server File

================================================

Purpose of this file:

This file starts the Express server and connects
the main parts of our application together.

Think of it as the "entry point" of the backend.

Main responsibilities:

1. Create Express application
2. Configure middleware
3. Serve static files
4. Connect routes
5. Start server

As our project grows we will keep this file
simple and move logic into separate folders.

================================================
*/

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

/*
-----------------------------------------------
Fix for __dirname in ES Modules
-----------------------------------------------

CommonJS provides __dirname automatically.
ES Modules do not.

This code recreates __dirname so we can
reference file paths safely.
*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
-----------------------------------------------
Create Express App
-----------------------------------------------
*/

const app = express();
const port = 3000;

/*
-----------------------------------------------
Set View Engine

EJS allows us to create dynamic HTML pages.
We will store templates inside /views.

Later controllers will send data to these
views so pages can display book information.
-----------------------------------------------
*/

app.set("view engine", "ejs");

/*
-----------------------------------------------
Middleware

Middleware runs before routes.

bodyParser allows Express to read form data
submitted from HTML forms.

Example:
When a user submits the "Add Book" form,
the data will be available in req.body.
-----------------------------------------------
*/

app.use(bodyParser.urlencoded({ extended: true }));

/*
-----------------------------------------------
Static Files

This allows the browser to access files in
the /public folder.

Example file locations:

public/css/styles.css
public/js/script.js
public/react/

Any new frontend assets should go here.
-----------------------------------------------
*/

app.use(express.static(path.join(__dirname, "public")));

/*
-----------------------------------------------
Temporary Test Route

This is just to confirm the server is running.

Later we will move routes into the /routes
folder for better architecture.
-----------------------------------------------
*/

app.get("/", (req, res) => {

  res.send("BookToAction server is running 🚀");

});

/*
-----------------------------------------------
Start Server
-----------------------------------------------
*/

app.listen(port, () => {

  console.log(`Server running on port ${port}`);

});