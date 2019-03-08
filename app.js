#!/usr/bin/env node

const getBingTodayImage = require("./utils/fetchAPI");
const wallpaper = require("wallpaper");
const fs = require("fs");
const commander = require("commander");
const cmd = require("node-cmd");

const dateFormat = require("dateformat");
const today = dateFormat(new Date(), "yyyymmdd");

getBingTodayImage();

// backup wallpaper
const originImage = fs.existsSync(
  `${process.env.HOME}\\.picday\\backup\\origin.jpg`
);
if (originImage !== true) {
  const backupWallPaper = async () => {
    const nowPaper = await wallpaper.get();
    fs.copyFileSync(
      nowPaper,
      `${process.env.HOME}\\.picday\\backup\\origin.jpg`
    );
  };
  backupWallPaper();
}

// mkdir dir
const homeDir = fs.readdirSync(`${process.env.HOME}`);
const isExist = homeDir.indexOf(".picday");
if (isExist === -1) {
  fs.mkdirSync(`${process.env.HOME}\\.picday`);
  fs.mkdirSync(`${process.env.HOME}\\.picday\\bing`);
  fs.mkdirSync(`${process.env.HOME}\\.picday\\backup`);
}

const setBingWallpaper = async () => {
  await wallpaper.set("C:\\Users\\xnng\\.picday\\bing\\20190308.jpg");
};

commander
  .command("use <option>")
  .description("change wallpaper to bing")
  .action(option => {
    if (option === "bing") {
      // setBingWallpaper();
      (async () => {
        await wallpaper.set("C:\\Users\\xnng\\.picday\\bing\\20190310.jpg");
      })();
    } else {
      console.log("none");
    }
  });

commander
  .command("reset")
  .description("reset wallpaper")
  .action(() => {
    (async () => {
      await wallpaper.set("C:\\Users\\xnng\\.picday\\backup\\origin.jpg");
    })();
  });

commander.parse(process.argv);
