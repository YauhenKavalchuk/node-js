const fs = require("fs");

fs.readFile("./test.txt", (error, data) => {

  fs.mkdir("./files", () => {});

  fs.writeFile("./files/test2.txt", `${data.toString()}New text!`, (error) => {
    console.log(error);
  });

});

setTimeout(() => {
  if (fs.existsSync("./files/test2.txt")) {
    fs.unlink("./files/test2.txt", () => {});
  }
}, 4000);
setTimeout(() => {
  if (fs.existsSync("./files")) {
  fs.rmdir("./files", () => {});
  }
}, 6000);

//console.log("Just test!");
