const os = require("os");
const { userName: user, sayHi } = require("./test");

console.log(user);

const name = "Tommy";

console.log(sayHi(name));

module.exports = name;

console.log(os.platform(), os.release());
