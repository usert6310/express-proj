exports.login = (req, res) => {
  res.render("login_page", { layout: "index" });
};

exports.home = (req, res) => {
  res.render("main", { layout: "index", fileObjects: textArray });
};

// Render the individual_article component
exports.article = (req, res) => {
  res.render("individual_article", {
    layout: "index",
    // Pass the article at position :id (dynamic endpoint value) within the text array as an object to be displayed as content
    fileObjects: textArray[req.params.id],
  });
};
