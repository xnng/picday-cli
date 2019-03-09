const fs = require("fs");
const { homeDir, originUrl } = require("../config/constants");
const wallpaper = require("wallpaper");

const initHomeDir = () => {
  const userDir = fs.readdirSync(process.env.HOME);
  const isExist = userDir.indexOf(".picday");
  if (isExist === -1) {
    fs.mkdirSync(homeDir);
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
