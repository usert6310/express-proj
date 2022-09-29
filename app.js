const express = require("express");
const handlebars = require("express-handlebars");
const { createTextArray } = require("./helper_functions/createTextArray");
const { getFileNames } = require("./helper_functions/getFileNames");
const { login, home, article } = require("./endpoint_functions");

const app = express();
const port = 3001;

// Get list of file names from article repository
fileNames = getFileNames("./text_files");
// Create an array of contents of the articles to be displayed within the webpage
textArray = createTextArray(fileNames, "text_files");

// Set default engine & view
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars.engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: "hbs",
    defaultLayout: "index",
  })
);

// Home page (uses main view)
app.get("/", home);

// Login Page (uses login_page view)
app.get("/login", login);

// Dynamic url to create a new endpoint for each article in textArray
// (uses individual_article view)
app.get("/articles/:id", article);

// init express
app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
