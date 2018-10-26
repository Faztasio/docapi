// Distribution Modules
const markdown = require("./markdown.js")

// Other modules
const filestream = require("fs")
const path = require("path")

function bufferFile(relPath) {
  return fs.readFileSync(path.join(__dirname, relPath)).toString(); // zzzz....
}
