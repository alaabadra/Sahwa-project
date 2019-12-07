const path = require("path");
const fs = require("fs");

module.exports = (req, res, next) => {
   console.log(111111);
    
    const pathFile = path.join(__dirname, "getBalckmainServices.json");
    fs.readFile(pathFile, (error, file) => {
      if (error) {
        res.writeHead(500, {"Content-Type": "text/html"});
        res.end("<h1>Sorry,  internal server error</h1>");
      } else {
        res.writeHead(200, {"contant-Type": 'application/json'});
        res.end(file);
      }
    });
  };
  