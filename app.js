#!/usr/bin/env node
const wallpaper = require("wallpaper");
const program = require("commander");
const setMomentun = require("./src/saveMomenImage");
const setBing = require("./src/saveBingImage");
const fs = require("fs");
const fss = require("fs-extra");
const initProgram = require("./src/init");
const openExplorer = require("open-in-explorer");

const {
  bingUrl,
  momentumUrl,
  originUrl,
  dataStoreFile,
  homeDir
} = require("./config/constants");

const Store = require("data-store");
const store = new Store({ path: dataStoreFile });

initProgram();
program.version("1.6.2");

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
    (async () => {
      await fss.remove(bingUrl);
      await fss.remove(momentumUrl);
      console.log("clean success!");
    })();
  });

program
  .command("set-id <id>")
  .description("set momentum uuid")
  .action(id => {
    store.set("uuid", id);
  });

program
  .command("set-area <code>")
  .description("set bing area")
  .action(code => {
    store.set("area", code);
  });

program
  .command("open")
  .description("open picture folder in explorer")
  .action(() => {
    openExplorer(homeDir);
  });

program.command("*").action(() => {
  console.log("No Such Command !");
});

program.parse(process.argv);

if (process.argv.length <= 2) {
  program.help();
}
