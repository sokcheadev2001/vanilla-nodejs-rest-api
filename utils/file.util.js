const fs = require("fs");

function writeDataToFile(filename, conntent) {
  fs.writeFileSync(filename, JSON.stringify(conntent), "utf8", (err) => {
    if (err) {
      console.log(error);
    }
  });
}

module.exports = {
  writeDataToFile,
};
