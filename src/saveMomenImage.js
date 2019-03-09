const got = require("got");
const { mommentumDay } = require("../utils/formatDate");
const { momentumUrl, momentumId } = require("../config/constants");
const fs = require("fs");
const wallpaper = require("wallpaper");
const progress = require("progress-stream");
const chalk = require("chalk");

var str = progress({
  length: 3145728,
  time: 1000
});

str.on("progress", function(progress) {
  console.log(chalk.green("downloading......"));
  console.log(Math.round(progress.percentage) + "%");
});

const client = got.extend({
  baseUrl: "https://api.momentumdash.com",
  headers: {
    "X-Momentum-ClientId": momentumId,
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
