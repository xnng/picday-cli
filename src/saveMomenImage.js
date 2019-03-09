const got = require("got");
const { today, mommentumDay } = require("../utils/formatDate");
const { homeDir, momentumUrl } = require("../config/constants");
const fs = require("fs");
const wallpaper = require("wallpaper");
const progress = require("progress-stream");

var str = progress({
  length: 3145728,
  time: 1000
});

str.on("progress", function(progress) {
  console.log("downloading......");
  console.log(Math.round(progress.percentage) + "%");
});

const client = got.extend({
  baseUrl: "https://api.momentumdash.com",
  headers: {
    "X-Momentum-ClientId": "d2608540-c607-4422-a6c7-1e35233ad37d",
    Host: "api.momentumdash.com"
  }
});

const setMomentun = async () => {
  const response = await client.get(
    `/feed/bulk?syncTypes=backgrounds&localDate=${mommentumDay}`
  );
  const imgUrl = JSON.parse(response.body).backgrounds[0].filename;
  got
    .stream(imgUrl)
    .pipe(str)
    .pipe(fs.createWriteStream(momentumUrl))
    .on("finish", async () => {
      await wallpaper.set(momentumUrl);
    });
};

module.exports = setMomentun;
