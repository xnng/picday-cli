const fs = require("fs");
const { homeDir } = require("../config/constants");
const wallpaper = require("wallpaper");

const initHomeDir = () => {
  const userDir = fs.readdirSync(process.env.HOME);
  const isExist = userDir.indexOf(".picday");
  if (isExist === -1) {
    fs.mkdirSync(homeDir);
  }
};

const backupWallPaper = () => {
  const originImage = fs.existsSync(`${homeDir}\\origin.jpg`);

  if (originImage !== true) {
    (async () => {
      const nowPaper = await wallpaper.get();
      fs.copyFileSync(nowPaper, `${homeDir}\\origin.jpg`);
    })();
  }
};

const initProgram = () => {
  initHomeDir();
  backupWallPaper();
};

module.exports = initProgram;
