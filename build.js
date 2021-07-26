#!/usr/bin/env node

const ghPages = require("gh-pages");
const png = require("png-to-ico");
const fs = require("fs/promises");

// The errorHandler function
function errorHandler(err) {
  console.log(err);
  return process.exit(1);
}

(function () {
  // Convert our `.png` logo to `.ico` format
  png("./app/assets/logo.png").then((buf) => {
    fs.writeFile("./app/favicon.ico", buf)
    .catch(errorHandler);
  }).catch(errorHandler);

  // Push our `./app` folder to the `gh-pages` branch
  // ghPages.publish("./app",errorHandler);
}).call(this);