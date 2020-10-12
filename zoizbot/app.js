'use strict';

const Discord = require("discord.js");// bring us the magic / kom maar op met die voorgeschreven library
const zoizbot = new Discord.Client(); // discord client is now made zoizbot. wat een lol zeg tjonge 

var fs = require('fs');

zoizbot.commands = new Discord.Collection();

console.log(" ==============================================");
console.log(` starting zoizbot...`);
eval(fs.readFileSync('./bootscreen.js') + ''); // please delete this, using readFileSync 1 time was bad enough. But I didnt want ascii art in my main file ;)
console.log(` loading configuration file...`)

const config = require("./conf.json"); // de conf ophalen die we net gemaakt hadden / picking up the config file we made

console.log(` configuration loaded!`) // should make an catch error to debug conf file but whatever
console.log(" ==============================================");
console.log(` loading the commandhandler...`)

eval(fs.readFileSync('./commandhandler.js') + '');

console.log(` commandhandler loaded!`)
console.log(" ==============================================");
console.log(" ")
console.log(` loading command-files...`)
console.log(" ")

eval(fs.readFileSync('./commandloader.js') + ''); // Loading from command folders. easy mode :)

zoizbot.login(config.token).catch(console.error); //reading the "token" from the const config = conf.json btw the one you see is invalid now