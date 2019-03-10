const got = require("got");
const { bingUrl } = require("../config/constants");
const fs = require("fs");
const wallpaper = require("wallpaper");
const progress = require("progress-stream");
const chalk = require("chalk");
const bingArea = require("../config/constants");

var str = progress({
  length: 524288,
  time: 1000
});

str.on("progress", function(progress) {
  console.log(chalk.green("downloading......"));
  console.log(Math.round(progress.percentage) + "%");
});

const setBing = () => {
  (async () => {
    const response = await got(
      `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=${bingArea}`
    ).catch(err => {
      console.log("please try again");
    });
    const imgUrl = `https://www.bing.com${
      JSON.parse(response.body).images[0].url
    }`;

    if (imgUrl) {
      got
        .stream(imgUrl)
        .pipe(str)
        .pipe(fs.createWriteStream(bingUrl))
        .on("finish", async () => {
          await wallpaper.set(bingUrl);
        });
    }
  })();
};

module.exports = setBing;
