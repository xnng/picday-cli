#!/usr/bin/env node

const commander = require("commander");
const cmd = require("node-cmd");

commander
  .version("1.0.0")
  .option("-a, --aaa", "aaaaa")
  .option("-b, --bbb", "bbbbb")
  .option("-c, --ccc [name]", "ccccc");

if (commander.aaa) {
  console.log("aaa");
}

if (commander.bbb) {
  console.log("bbb");
}

if (commander.ccc) {
  console.log("ccc", commander.ccc);
}

commander
  .command("init <name>")
  .description("fsfsdfsd")
  .action(function(name) {
    console.log(name);

    cmd.get(
      `
      echo ${name}
      `,
      (err, data) => {
        console.log(data);
        if (!err) {
          console.log("init success");
          return;
        }

        console.error("init error");
      }
    );
  });

commander.parse(process.argv);
