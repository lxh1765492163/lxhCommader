/*
 * @Author: luoxiaohong
 * @Date: 2019-12-06 17:06:30
 * @LastEditors: luoxiaohong
 * @LastEditTime: 2019-12-16 13:55:46
 * @Description: 
 */
const co = require('co');
const prompt = require('co-prompt');
const config = require('../templates');
const fs = require('fs');
const exec = require('child_process').exec

module.exports = ()=>{
    co(function *(){
        let tplName = yield prompt('Template name: ');
        let projectName = yield prompt('Project name: ');
       

        if (!config.tpl[tplName]) {
            console.log(chalk.red('\n × Template does not exit!'))
            process.exit()
        }

        let gitUrl =  config.tpl[tplName].url;
        let branch =  config.tpl[tplName].branch;


        let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`;
        exec(cmdStr, (error, stdout, stderr)=>{
            if (error) {
                console.log(error)
                process.exit()
            }
            console.log(`\n cd ${projectName} && npm install \n`)
            process.exit();
        })
    })
};