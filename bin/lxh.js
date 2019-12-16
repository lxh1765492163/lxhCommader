#!/usr/bin/env node
const { resolve } = require('path');
const program = require('commander');
const { version } = require(resolve(__dirname, '../package.json'));
const add = require('../command/add');
const init = require('../command/init');
process.env.NODE_PATH = resolve(__dirname, '../node_modules/');

program
  .version(version)

program
  .usage('<command>')

program
  .command('init')
  .description('Generate a new project')
  .alias('i')
  .action(() => {
    console.log("执行init");
    init();
  })

program
  .command('add')
  .description('add a new project')
  .alias('a')
  .action(() => {
    console.log("执行add");
    add();
  })


program.parse(process.argv)

// if(!program.args.length){
//   program.help()
// }