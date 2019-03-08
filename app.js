#!/usr/bin/env node
const wallpaper = require("wallpaper");
const fs = require("fs");
const today = require("./utils/today");
const got = require("got");
const commander = require("commander");
const { homeDir } = require("./config/constants");
const { bingAPI } = require("./config/api");

commander
  .command("use <option>")
  .description("change wallpaper to bing")
  .action(option => {
    if (option === "bing") {
      got
        .stream(bingAPI)
        .pipe(fs.createWriteStream(`${homeDir}\\bing-${today}.jpg`))
        .on("finish", async () => {
          await wallpaper.set(`${homeDir}\\bing-${today}.jpg`);
        });
    } else {
      console.log("none");
    }
  });

commander
  .command("reset")
  .description("reset wallpaper")
  .action(() => {
    (async () => {
      await wallpaper.set(`${homeDir}\\origin.jpg`);
    })();
  });

commander.parse(process.argv);
