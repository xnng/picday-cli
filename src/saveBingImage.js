const got = require("got");
const { today } = require("../utils/formatDate");
const { homeDir, bingUrl } = require("../config/constants");
const fs = require("fs");
const { bingAPI } = require("../config/api");
const wallpaper = require("wallpaper");
const progress = require("progress-stream");

var str = progress({
  length: 524288,
  time: 1000
});

str.on("progress", function(progress) {
  console.log("downloading......");
  console.log(Math.round(progress.percentage) + "%");
});

const setBing = () => {
  got
    .stream(bingAPI)
    .pipe(str)
    .pipe(fs.createWriteStream(bingUrl))
    .on("finish", async () => {
      await wallpaper.set(bingUrl);
    });
};

module.exports = setBing;
