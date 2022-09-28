const express = require("express");
const app = express();
const port = 3001;
const fs = require("fs");

const handlebars = require("express-handlebars");

const fileNames = fs.readdirSync("./text_files", (err, files) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log(files);
  return files;
});

const textArray = [];

fileNames.forEach((file, index) => {
  let textContent = fs.readFileSync(
    `./text_files/${file}`,
    "utf-8",
    (err, data) => {
      return data;
    }
  );
  const articleArray = {
    id: index,
    articleName: file,
    contents: textContent,
    articleSummary: `${textContent.substring(0, 120)}...`,
  };
  textArray.push(articleArray);
});

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars.engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: "hbs",
    defaultLayout: "index",
  })
);

console.log(textArray[0])

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index", fileObjects: textArray });
});

app.get("/0", (req, res) => {
  res.render("secondary", { layout: "index", fileObjects: textArray[0] })
})

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
