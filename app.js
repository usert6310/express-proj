const express = require("express");
const handlebars = require("express-handlebars");

const { login, home, article } = require("./endpoint_functions");

const app = express();
const port = 3001;

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
app.listen(port);
