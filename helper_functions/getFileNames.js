/* eslint-disable consistent-return */
const fs = require("fs");

exports.getFileNames = function getFileNames(filePath) {
  const fileNames = fs.readdirSync(filePath, (err, files) => {
    if (err) {
      return;
    }
    return files;
  });
  return fileNames;
};

