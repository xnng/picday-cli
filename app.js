#!/usr/bin/env node

const getBingTodayImage = require("./utils/fetchAPI");
const wallpaper = require("wallpaper");
const fs = require("fs");
const commander = require("commander");
const cmd = require("node-cmd");

const backupWallPaper = async () => {
  const nowPaper = await wallpaper.get();
  fs.copyFileSync(nowPaper, `${__dirname}\\out\\old\\reset.jpg`);
};

const setBingWallpaper = async () => {
  await wallpaper.set(`C:\\Users\\xnng\\code\\picday\\out\\bing\\20190308.jpg`);
};

commander
  .command("use <option>")
  .description("change wallpaper to bing")
  .action(option => {
    if (option === "bing") {
      backupWallPaper();
      setBingWallpaper();
    } else {
      console.log("none");
    }

    // cmd.get(
    //   `
    //   echo ${name}
    //   `,
    //   (err, data) => {
    //     console.log(data);
    //     if (!err) {
    //       console.log("init success");
    //       return;
    //     }

    //     console.error("init error");
    //   }
    // );
  });

commander.parse(process.argv);

// commander
//   .version("0.0.1")
//   .option("-a, --aaa", "aaaaa")
//   .option("-b, --bbb", "bbbbb")
//   .option("-c, --ccc [name]", "ccccc");

// if (commander.aaa) {
//   console.log("aaa");
// }

// if (commander.bbb) {
//   console.log("bbb");
// }

// if (commander.ccc) {
//   console.log("ccc", commander.ccc);
// }
