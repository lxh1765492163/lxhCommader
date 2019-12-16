/*
 * @Author: luoxiaohong
 * @Date: 2019-12-06 19:36:51
 * @LastEditors: luoxiaohong
 * @LastEditTime: 2019-12-16 10:27:07
 * @Description: 
 */
const prompt = require("co-prompt");
var name = yield prompt('username: ');
var pass = yield password('password: ');
var desc = yield multiline('description: ');
var ok = yield confirm('are you sure? ');