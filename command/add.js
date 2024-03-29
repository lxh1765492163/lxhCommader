/*
 * @Author: luoxiaohong
 * @Date: 2019-12-06 18:37:26
 * @LastEditors: luoxiaohong
 * @LastEditTime: 2019-12-16 11:39:18
 * @Description: 
 */
const co = require('co')
const prompt = require('co-prompt')
const config = require('../templates')
const fs = require('fs')

module.exports = ()=>{
    co(function *(){

        console.log("进入add文件");
        // 分步接收用户输入的参数
        let tplName = yield prompt('Template name: ');
        let gitUrl = yield prompt('Git https link: ');
        let branch = yield prompt('Branch: ');

        // 避免重复添加
       if( !config.tpl.tplName ){
        config.tpl[tplName] = {}
        config.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '') // 过滤unicode字符
        config.tpl[tplName]['branch'] = branch
       }else{
        console.log(chalk.red('Template has already existed!'))
        process.exit()
       }

       // 把模板信息写入templates.json
       fs.writeFile(__dirname+"/../templates.json", JSON.stringify(config), 'utf-8', (err) => {
        if (err){
            console.log(err);
        }
        console.log(config)
        process.exit()
       })

    })
}