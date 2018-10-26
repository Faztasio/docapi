var showdown = require("showdown"),
  exporter = new showdown.Converter()

module.exports = function(md) {
  return exporter.makeHtml(md)
}
