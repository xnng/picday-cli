#!/usr/bin/env node
const wallpaper = require("wallpaper");
const program = require("commander");
const setMomentun = require("./src/saveMomenImage");
const setBing = require("./src/saveBingImage");
const fs = require("fs");
const initProgram = require("./src/init");

const { bingUrl, momentumUrl, originUrl } = require("./config/constants");

initProgram();
program.version("0.2.0");

program
  .command("use <name>")
  .description("change wallpaper to bing or momentum")
  .action(name => {
    if (name === "bing") {
      if (fs.existsSync(bingUrl)) {
        (async () => {
          await wallpaper.set(bingUrl);
        })();
      } else {
        setBing();
      }
    } else if (name === "momentum") {
      if (fs.existsSync(momentumUrl)) {
        (async () => {
          await wallpaper.set(momentumUrl);
        })();
      } else {
        setMomentun();
      }
    }
  });

program
  .command("reset")
  .description("reset wallpaper")
  .action(() => {
    (async () => {
      await wallpaper.set(originUrl);
    })();
  });

program
  .command("clean")
  .description("delete today's wallpaper")
  .action(() => {
    fs.unlinkSync(bingUrl);
    fs.unlinkSync(momentumUrl);
  });

program.command("*").action(() => {
  console.log("No Such Command !");
});

program.parse(process.argv);

if (process.argv.length <= 2) {
  program.help();
}
