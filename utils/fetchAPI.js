const fs = require("fs");
const request = require("request");
const dateFormat = require("dateformat");

const today = dateFormat(new Date(), "yyyymmdd");

const getBingTodayImage =  () => {
   request(`https://img.hacpai.com/bing/${today}.jpg`)
    .on("error", err => {
      console.log(err);
    })
    .pipe(fs.createWriteStream(`./out/bing/${today}.jpg`));

  return `${__dirname}\\out\\bing\\${today}.jpg`;
};

module.exports = getBingTodayImage;
