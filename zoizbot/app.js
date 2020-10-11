'use strict';

const Discord = require(`discord.js`); // bring us the magic / kom maar op met die voorgeschreven library
const config = require(`.\conf.json`); // de conf ophalen die we net gemaakt hadden / picking up the config file we made
const zoizbot = new Discord.Client(); // discord client is now made zoizbot. wat een lol zeg tjonge 


console.log(`starting zoizbot...`);



zoizbot.on("ready", () => {
    console.log(`Zoizbot has started, and is serving ${zoizbot.users.cache.size} users, in ${zoizbot.guilds.cache.size} guilds.`); // you can display anything you want here, all the functions are available in de documentation from discord.js

    zoizbot.user.setActivity(`Ask me something with >`); // change this to whatever you want. check out https://discord.js.org/#/docs/main/12.3.1/general/welcome
});

zoizbot.on("guildCreate", guild => {
    console.log(`Thank you for having me ${guild.name}! I will be serving ${guild.memberCount} members!`); // Join server message in the console
    message.channel.send(`Hello ${guild.name} thank you for having me!`);
});

zoizbot.on("guildDelete", guild => {
    console.log(`Adios! i will be leaving: ${guild.name} It was fun while it lasted!`);
});


zoizbot.login(config.token); //reading the "token" from the const config = conf.json 
