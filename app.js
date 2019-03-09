#!/usr/bin/env node
const wallpaper = require("wallpaper");
const fs = require("fs");
const { today } = require("./utils/formatDate");
const got = require("got");
const program = require("commander");
const { homeDir } = require("./config/constants");
const { bingAPI } = require("./config/api");
const setMoment = require("./src/saveMomenImage");
const setBing = require("./src/saveBingImage");

program.version("0.2.0");

program
  .command("use <name>")
  .description("change wallpaper to bing or momentum")
  .action(name => {
    if (name === "bing") {
      setBing();
    } else if (name === "momentum") {
      setMoment();
    }
  });

program
  .command("reset")
  .description("reset wallpaper")
  .action(() => {
    (async () => {
      await wallpaper.set(`${homeDir}\\origin.jpg`);
    })();
  });

program.command("*").action(() => {
  console.log("No Such Command !");
});

program.parse(process.argv);

if (process.argv.length <= 2) {
  program.help();
}
