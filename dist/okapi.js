// Distribution Modules
const markdown = require("./markdown.js")

// Other modules
const glob = require("glob")
const fs = require("fs")
const path = require("path")

const mdFiles = []

glob("**/pages/*.md",function(er,files) {
  if (!er) {
    files.forEach(function(file) {
      mdFiles.push(file)
    }
  } else {
    console.log((er.toString())
  }
}
