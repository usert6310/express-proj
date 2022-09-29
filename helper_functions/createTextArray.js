const fs = require("fs");

exports.createTextArray = function createTextArray(fileNames, filePath) {
  const textArray = [];
  fileNames.forEach((file, index) => {
    let textContent = fs.readFileSync(
      (`./${filePath}/${file}`),
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
