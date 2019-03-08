const fs = require("fs");
const request = require("request");
const dateFormat = require("dateformat");

const today = dateFormat(new Date(), "yyyymmdd");

const getBingTodayImage = () => {
  request(`https://img.hacpai.com/bing/${today}.jpg`).pipe(
    fs.createWriteStream(`${process.env.HOME}/.picday/bing/${today}.jpg`)
  );
};

module.exports = getBingTodayImage;
