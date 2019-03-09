const Store = require("data-store");

const { today } = require("../utils/formatDate");
const homeDir = `${process.env.HOME || process.env.USERPROFILE}\\.picday`;
const bingUrl = `${homeDir}\\bing-${today}.jpg`;
const momentumUrl = `${homeDir}\\momentum-${today}.jpg`;
const originUrl = `${homeDir}\\origin.jpg`;
const dataStorePath = `${process.env.HOME ||
  process.env.USERPROFILE}\\.config\\data-store`;
const dataStoreFile = `${process.env.HOME ||
  process.env.USERPROFILE}\\.config\\data-store\\config.json`;

const store = new Store({ path: dataStoreFile });
const momentumId = store.get("uuid") || "d2608540-c607-4422-a6c7-1e35233ad37d";

module.exports = {
  homeDir,
  bingUrl,
  momentumUrl,
  originUrl,
  dataStorePath,
  dataStoreFile,
  momentumId
};
