zoizbot.on("ready", () => {
    zoizbot.user.setActivity(config.activity); // change this to whatever you want (in conf.json).
    console.log(` Zoizbot is listening, `); // you can display anything you want here, all the functions are available in de documentation from discord.js
    console.log(` and is currently serving ${ zoizbot.users.cache.size } users, in ${ zoizbot.guilds.cache.size } guilds.`)
    console.log(" ==================LISTENING===================");
});

zoizbot.on("guildJoin", guild => {
    console.log(` I have joined ${guild.name}, I will be serving ${guild.memberCount} members!`); // Join server message in the console
    message.channel.send(` Hello ${guild.name}, thank you for having me!`);
});

zoizbot.on("guildLeave", guild => {
    console.log(` Adios! i will be leaving: ${guild.name}, it was fun while it lasted!`); //letting you know he be headin out
});

zoizbot.on("message", async message => {
    if (message.author.bot) return; //ignore bots
    if (message.content.indexOf(config.prefix) !== 0) return; // dont waste time listening to non prefix commands
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();  // slice and dice && lowercase
    const cmd = zoizbot.commands.get(command);
    if (!cmd) return; //if the command doesnt exist gracefully return

    cmd.run(zoizbot, message, args); // and fire!
});
