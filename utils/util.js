const fs = require("fs");

function writeDataToFile(filename, conntent) {
  fs.writeFileSync(filename, JSON.stringify(conntent), "utf8", (err) => {
    if (err) {
      console.log(error);
    }
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  writeDataToFile,
  getPostData,
};
