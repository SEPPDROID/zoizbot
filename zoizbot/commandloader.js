var loaded = 0
fs.readdir (`./commands/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return; // only load js files. no garbage collection
        let props = require(`./commands/${file}`); // get the command name from the file.js
        let commandName = file.split(".")[0];
        console.log(` attempting to load command: ${commandName}`); // adding everything to the collection
        zoizbot.commands.set(commandName, props);
        loaded++; // beginners trick to check if all the folder-commands where loaded // i really dont know what im doing here hahahaha
    });
    if (loaded == 4) {              // this is the funniest shit i have ever done. pure for asthetics. please change this to a different way
        console.log(" ")
        console.log(` all commands loaded!`);
        console.log(" ")
        console.log(" ==============================================");
    }
});
fs.readdir (`./commands/fun/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return; 
        let props = require(`./commands/fun/${file}`); 
        let commandName = file.split(".")[0];
        console.log(` attempting to load command: ${commandName}`); 
        zoizbot.commands.set(commandName, props);
        loaded++;
    });
    if (loaded == 4) {
        console.log(" ")
        console.log(` all commands loaded!`);
        console.log(" ")
        console.log(" ==============================================");
    }
});
fs.readdir(`./commands/general/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return; 
        let props = require(`./commands/general/${file}`); 
        let commandName = file.split(".")[0];
        console.log(` attempting to load command: ${commandName}`); 
        zoizbot.commands.set(commandName, props);
        loaded++;
    });
    if (loaded == 4) {
        console.log(" ")
        console.log(` all commands loaded!`);
        console.log(" ")
        console.log(" ==============================================");
    }
});
fs.readdir(`./commands/moderation/`, (err, files) => {  //copy paste for different folders works fine. dirty fix no.394 haha
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return; 
        let props = require(`./commands/moderation/${file}`); 
        let commandName = file.split(".")[0];
        console.log(` attempting to load command: ${commandName}`); 
        zoizbot.commands.set(commandName, props);
        loaded++;
    });
    if (loaded == 4) {
        console.log(" ")
        console.log(` all commands loaded!`);
        console.log(" ")
        console.log(" ==============================================");
    }
});
