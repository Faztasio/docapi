// Distribution Modules
const markdown = require("./markdown.js")

// Other modules
const glob = require("glob")
const fs = require("fs")
const path = require("path")

var createElement = document.createElement

var mdFiles = []
var currentPage = ""

glob("**/pages/*.md",function(er,files) {
  if (!er) {
    files.forEach(function(file) {
      mdFiles.push(file)
    }
  } else {
    console.log((er.toString())
  }
}

var content = document.getElementById("content"),
  sidebar = document.getElementById("sidenav")

mdFiles.forEach(function(obj) {
  var elem = createElement("div")
  elem.id = obj
  elem.innerHTML = obj
  elem.onClick = switchPage(elem.innerHTML)
  sidebar.appendChild(elem)
}

function bufferFile(relPath) {
    return fs.readFileSync(path.join(__dirname, relPath)); // zzzz....
}

var switchPage = function(pageName) {
  content.innerHTML = toString(bufferFile(pageName))
}
