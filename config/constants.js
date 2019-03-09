const { today, mommentumDay } = require("../utils/formatDate");

const homeDir = `${process.env.HOME}\\.picday`;
const bingUrl = `${homeDir}\\bing-${today}.jpg`;
const momentumUrl = `${homeDir}\\momentum-${today}.jpg`;
const originUrl = `${homeDir}\\origin.jpg`;

module.exports = {
  homeDir,
  bingUrl,
  momentumUrl,
  originUrl
};
