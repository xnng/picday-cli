const Store = require("data-store");

const normalize = require("normalize-path");

const { today } = require("../utils/formatDate");
const homeDir = normalize(
  `${process.env.HOME || process.env.USERPROFILE}\\.picday`
);
const bingUrl = normalize(`${homeDir}\\bing-${today}.jpg`);
const momentumUrl = normalize(`${homeDir}\\momentum-${today}.jpg`);
const originUrl = normalize(`${homeDir}\\origin.jpg`);
const dataStorePath = normalize(
  `${process.env.HOME || process.env.USERPROFILE}\\.config\\data-store`
);
const dataStoreFile = normalize(
  `${process.env.HOME ||
    process.env.USERPROFILE}\\.config\\data-store\\config.json`
);

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
