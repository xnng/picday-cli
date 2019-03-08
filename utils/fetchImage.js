const { bingAPI } = require("../config/api");

const fs = require("fs");
const request = require("request");
const dateFormat = require("dateformat");
const axios = require("axios");

const today = dateFormat(new Date(), "yyyymmdd");

// const getBingTodayImage = () => {
//   request(`https://img.hacpai.com/bing/${today}.jpg`).pipe(
//     fs.createWriteStream(`${process.env.HOME}/.picday/bing/${today}.jpg`)
//   );
// };

const getBing = async () => {
  const imageFile = await axios.get(bingAPI);
  imageFile.pipe(fs.createWriteStream("./out/test.jpg"))
};

getBing()

// module.exports = getBingTodayImage;
