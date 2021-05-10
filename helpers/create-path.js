const path = require('path');

const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);

module.exports = createPath;
