const fs = require("fs");

exports.getFileNames = function getFileNames(filePath) {
  let fileNames = fs.readdirSync(filePath, (err, files) => {
    if (err) {
      console.log("error");
      return;
    }
    return files;
  });
  return fileNames;
};

