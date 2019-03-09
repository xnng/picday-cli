const fs = require("fs");
const { homeDir, originUrl } = require("../config/constants");
const wallpaper = require("wallpaper");
const fss = require("fs-extra");
const {dataStorePath,dataStoreFile} = require("../config/constants");

const initHomeDir = () => {
  const userDir = fs.readdirSync(process.env.HOME || process.env.USERPROFILE);
  const isExist = userDir.indexOf(".picday");
  if (isExist === -1) {
    fs.mkdirSync(homeDir);
  }

  const isConfigExist = fs.existsSync(dataStoreFile);
  if (isConfigExist !== true) {
    fss.mkdirpSync(dataStorePath);
    fss.writeFileSync(dataStoreFile);
  }
};

const backupWallPaper = () => {
  const originImage = fs.existsSync(originUrl);

  if (originImage !== true) {
    (async () => {
      const nowPaper = await wallpaper.get();
      fs.copyFileSync(nowPaper, originUrl);
    })();
  }
};

const initProgram = () => {
  initHomeDir();
  backupWallPaper();
};

module.exports = initProgram;
