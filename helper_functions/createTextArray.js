const fs = require("fs");

const TEXT_LOCATION = process.env.ENV || "text_files"

exports.createTextArray = function createTextArray(fileNames) {
  const textArray = [];
  fileNames.forEach((file, index) => {
    let textContent = fs.readFileSync(
      (`./${TEXT_LOCATION}/${file}`),
      "utf-8",
      (err, data) => {
        return data;
      }
    );
    // Create article array
    const articleArray = {
      id: index,
      articleName: file,
      contents: textContent,
      articleSummary: `${textContent.substring(0, 125)}...`,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyEKIq_a7eWEwVEoo1aTBQ6gV1KQ4BI8ojEQgnl0ITQ&s",
    };
    textArray.push(articleArray);
  });
  return textArray;
};
