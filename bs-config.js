var path = require("path");
var publicDir = path.join(__dirname, "public");

var filesToWatch = [
  // any .html, any folder
  path.join(publicDir, "**", "*.html"),

  // any .css, excluding compiled files
  path.join(publicDir, "css", "**", "*.css"),
  "!" + path.join(publicDir, "css", "**", "*.min.css"),

  // any .js, excluding compiled files
  path.join(publicDir, "js", "**", "*.js"),
  "!" + path.join(publicDir, "js", "**", "*.min.js")
];

module.exports = {
  // Browsersync can watch your files as you work
  // Changes you make will either be injected into the page (CSS & images)
  // or will cause all browsers to do a full-page refresh
  files: filesToWatch,

  // Don't try to inject, just do a page refresh
  injectChanges: false,

  // Decide which URL to open automatically when Browsersync starts
  // Defaults to "local" if none set
  // Can be true, local, external, ui, ui-external, tunnel or false
  open: false,

  // Reload each browser when Browsersync is restarted
  reloadOnRestart: true,

// Use the built-in static server for basic HTML/JS/CSS websites
  server: {
    baseDir: publicDir,
    index: "index.html"
  }
};