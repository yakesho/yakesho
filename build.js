#!/usr/bin/env node

const ghPages = require("gh-pages");
const png = require("png-to-ico");
const fs = require("fs/promises");
const sharp = require("sharp");

(async () => {
  try {
    const svg = await fs.readFile("./app/favicon.svg");
    await sharp(svg).png().resize(256, 256).toFile("./app/assets/logo.png");

    const ico = await png("./app/assets/logo.png");
    await fs.writeFile("./app/favicon.ico", ico);

    ghPages.publish("./app", (err) => {throw err});
  } catch (error) {
    console.log(error?.message || error);
    process.exit(1);
  }
}).call(this);